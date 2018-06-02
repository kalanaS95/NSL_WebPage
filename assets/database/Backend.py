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
    date = db.Column(db.String(100))
    image1 = db.Column(db.String(2000000)) # inorder to save some disk space in the server we have to limit this is to 2mb
    imgDes1 = db.Column(db.String(100))
    image2 = db.Column(db.String(2000000))  # inorder to save some disk space in the server we have to limit this is to 2mb
    imgDes2 = db.Column(db.String(100))
    links = db.Column(db.String(10000))

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
    allNews =news.query.all()

    result = []
    for currNews in allNews:
        result.append(row_to_obj_news(currNews))

    return jsonify({"news":result}),200

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


def main():
    db.create_all()  # creates the tables you've provided
    app.run()  # runs the Flask application


if __name__ == '__main__':
    main()
