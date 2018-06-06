from bs4 import BeautifulSoup
f = open("./type_html.txt", "r")
ff = open("./type_out.txt", "w", encoding="utf8")
soup = BeautifulSoup(f, "html5lib")
print("oasd")
a = soup.findAll("p")
for x in a:
    string = ''
    for st in x.contents:
        string = string + str(st)
    ff.write(string.replace("\n"," ").replace("'", "''").replace("<br/>", "") + "\n")
    # if x.find("a"):
    #     xx = x.find("a")
    #     try:
    #         ff.write(xx.get("href") +"\n")
    #     except:
    #         ff.write("\n")
    # else:
    #     ff.write("NO URL\n")
ff.close()
