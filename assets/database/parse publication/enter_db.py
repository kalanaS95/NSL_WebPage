import sqlite3
sqlite_file = './database.db'
conn = sqlite3.connect(sqlite_file)
c = conn.cursor()

f = open("./publication_html_all.txt", "r")
lines = f.readlines()
table_name = "publications"
i = 0
year = 9999
while i < len(lines):
    if (len(lines[i])> 3) & (len(lines[i]) < 7):
       year = int(lines[i])
       print(year)
    if (len(lines[i]) > 6):
        try:
            c.execute("INSERT INTO {tn} (PUBLICATION, YEAR, LINK) VALUES ('{pub}', {year}, '{link}')".\
                format(tn=table_name, pub=lines[i].strip("\n"), year=str(year), link=lines[i+1].strip("\n")))       
        except:
            print(lines[i])
        i = i + 1
    i = i + 1
    pass
# c.execute("INSERT INTO {tn} ({pub}, {year}, {link}) VALUES (123456, 'test')".\
#     format(tn=table_name, year=year, cn=column_name))
conn.commit()
conn.close()
