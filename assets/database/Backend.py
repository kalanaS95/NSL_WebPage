from flask import Flask, jsonify, request
from flask_cors import CORS
import flask_sqlalchemy as sqlalchemy
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy import desc, distinct
import datetime
import json

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

db = sqlalchemy.SQLAlchemy(app)


# creates a table for the student information
class courses(db.Model):
    courseId = db.Column(db.Integer, primary_key=True)
    courseNumber = db.Column(db.String(100))
    courseTitle = db.Column(db.String(100))
    offeredQuarter = db.Column(db.String(100))
    description = db.Column(db.String(1000))
    link = db.Column(db.String(1000))

class links(db.Model):
    linkId = db.Column(db.Integer, primary_key=True)
    linkName = db.Column(db.String(100))
    linkLocation = db.Column(db.String(5000))

class news(db.Model):
    newsId = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.String(1000))
    date = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    image1 = db.Column(db.String(2000000)) # inorder to save some disk space in the server we have to limit this is to 2mb
    imgDes1 = db.Column(db.String(100))
    image2 = db.Column(db.String(2000000))  # inorder to save some disk space in the server we have to limit this is to 2mb
    imgDes2 = db.Column(db.String(100))
    links = db.Column(db.String(10000))

class tools(db.Model):
    toolId = db.Column(db.Integer, primary_key=True)
    toolTitle = db.Column(db.String(100))
    toolDescription = db.Column(db.String(5000))
    toolImage = db.Column(db.String(5000000))

class people(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    description = db.Column(db.String(1000))
    type = db.Column(db.String(100))
    webpage = db.Column(db.String(1000))
    email = db.Column(db.String(1000))
    linkedin = db.Column(db.String(1000))
    image = db.Column(db.String(2000000)) # inorder to save some disk space in the server we have to limit this is to 2mb

class research(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.String(5000))
    type = db.Column(db.String(100))
    link = db.Column(db.String(1000))

class publications(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    publication = db.Column(db.String(2000))
    year = db.Column(db.String(100))
    area = db.Column(db.String(500))
    type = db.Column(db.String(100))
    link = db.Column(db.String(1000))


base_url = '/api/'

#to get all the courses in the database
@app.route(base_url + 'courses', methods=['GET'])
def getCourses():
    allcourses =courses.query.all()

    result = []
    for currCourse in allcourses:
        result.append(row_to_obj_courses(currCourse))

    return jsonify({"courses":result}),200


#to get all the links in the database
@app.route(base_url + 'links', methods=['GET'])
def getLinks():
    allLinks =links.query.all()

    result = []
    for currLink in allLinks:
        result.append(row_to_obj_links(currLink))

    return jsonify({"links":result}),200



#to get all the news in the database
@app.route(base_url + 'news', methods=['GET'])
def getNews():
    allNews =news.query.order_by(desc(news.date)).all()

    result = []
    for currNews in allNews:
        result.append(row_to_obj_news(currNews))

    return jsonify({"news":result}),200

#to get all the news in the database
@app.route(base_url + 'news_4', methods=['GET'])
def getNews_4():
    allNews =news.query.order_by(desc(news.date)).limit(4)

    result = []
    for currNews in allNews:
        result.append(row_to_obj_news(currNews))

    return jsonify({"news":result}),200

#to get all the tools in the database
@app.route(base_url + 'tools', methods=['GET'])
def getTools():
    allTools =tools.query.all()

    result = []
    for currTool in allTools:
        result.append(row_to_obj_tools(currTool))

    return jsonify({"tools":result}),200

#to get all the faultymemebers in the database
@app.route(base_url + 'facultyMembers', methods=['GET'])
def facultyMembers():
    allFacultyMembers =people.query.filter_by(type="faculty").all()

    result = []
    for currFacultyMembers in allFacultyMembers:
        result.append(row_to_obj_people(currFacultyMembers))

    return jsonify({"people":result}),200


#to get all the current members in the database
@app.route(base_url + 'currentMembers', methods=['GET'])
def currentMembers():
    allFacultyMembers =people.query.filter_by(type="members").all()

    result = []
    for currFacultyMembers in allFacultyMembers:
        result.append(row_to_obj_people(currFacultyMembers))

    return jsonify({"people":result}),200

#to get all the current alums in the database
@app.route(base_url + 'alums', methods=['GET'])
def Alums():
    allFacultyMembers =people.query.filter_by(type="alum").all()

    result = []
    for currFacultyMembers in allFacultyMembers:
        result.append(row_to_obj_people(currFacultyMembers))

    return jsonify({"people":result}),200


#to get all the news in the research details
@app.route(base_url + 'research', methods=['GET'])
def getResearch():
    allResearch =research.query.all()

    result = []
    for currResearch in allResearch:
        result.append(row_to_obj_research(currResearch))

    return jsonify({"research":result}),200

#to get all the publications in the publications table
@app.route(base_url + 'publications', methods=['GET'])
def getPublications():
    allPublications =publications.query.all()

    result = []
    for currPublication in allPublications:
        result.append(row_to_obj_Publication(currPublication))

    return jsonify({"publications":result}),200


# data records to jason data converter fot course records
def row_to_obj_courses(row):
    row = {
        "courseId": row.courseId,
        "courseNumber": row.courseNumber,
        "courseTitle": row.courseTitle,
        "offeredQuarter": row.offeredQuarter,
        "description": row.description,
        "link": row.link
    }

    return row

# data records to jason data converter fot links records
def row_to_obj_links(row):
    row = {
        "linkId": row.linkId,
        "linkName": row.linkName,
        "linkLocation": row.linkLocation,
    }

    return row



# data records to jason data converter fot news records
def row_to_obj_news(row):
    row = {
        "newsId": row.newsId,
        "title": row.title,
        "description": row.description,
        "date": row.date,
        "image1": row.image1,
        "imgDes1": row.imgDes1,
        "image2": row.image2,
        "imgDes2": row.imgDes2,
        "links": row.links,
    }

    return row



# data records to jason data converter fot links records
def row_to_obj_tools(row):
    row = {
        "toolId": row.toolId,
        "toolTitle": row.toolTitle,
        "toolDescription": row.toolDescription,
        "toolImage": row.toolImage,
    }

    return row



# data records to jason data converter fot people records
def row_to_obj_people(row):
    row = {
        "id": row.id,
        "name": row.name,
        "description": row.description,
        "type": row.type,
        "webpage": row.webpage,
        "email": row.email,
        "linkedin": row.linkedin,
        "image": row.image,
    }

    return row

# data records to jason data converter fot research records
def row_to_obj_research(row):
    row = {
        "id": row.id,
        "title": row.title,
        "description": row.description,
        "type": row.type,
        "link": row.link,
    }

    return row



# data records to jason data converter fot research records
def row_to_obj_Publication(row):
    row = {
        "id": row.id,
        "publication": row.publication,
        "year": row.year,
        "area": row.area,
        "type": row.type,
        "link": row.link,
    }

    return row



def main():
    db.create_all()  # creates the tables you've provided
    app.run()  # runs the Flask application


if __name__ == '__main__':
    main()
