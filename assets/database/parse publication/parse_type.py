from difflib import SequenceMatcher
from bs4 import BeautifulSoup
import sqlite3
sqlite_file = '../database.db'
conn = sqlite3.connect(sqlite_file)
cur = conn.cursor()
table_name = "publications"
cur.execute("SELECT * FROM {pub}".format(pub=table_name))
rows = cur.fetchall()
titles = []
for row in rows:
    r =  BeautifulSoup(row[1], "html5lib").text
    titles.append([row[0], r])
f = open("./type_out.txt", "r")
out = open("./type_match_out.txt", "w")
lines = f.readlines()

Type = ""
for i in range(len(lines)):
    if lines[i] == "\n":
        continue
    l = BeautifulSoup(lines[i], "html5lib").text  
    
    if len(lines[i]) < 50:
        if len(lines[i]) > 10:
            print(l)
            Type = l.strip("\n")
        continue
   
    Max = 0
    max_i = -1
    
    for row in titles:
        s = SequenceMatcher(None, l, row[1])
        if Max < s.ratio():
            Max = s.ratio()
            max_i = row[0]
        pass
    if Max > 0.7:
        query = "UPDATE {tn} SET type=('{a}') WHERE id={idf}".\
            format(tn=table_name, a=Type, idf=str(max_i))
        print(query)
        conn.execute(query)
    else:
        out.write(l+"\n")
        out.write(str(Max)+" "+str(max_i)+"\n")
    pass




f.close()
out.close()
conn.commit()
conn.close()