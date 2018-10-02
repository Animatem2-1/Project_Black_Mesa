import pymongo

client = pymongo.MongoClient("mongodb://tester2:test1234@ds119663.mlab.com:19663/test1")

db = client.get_database()

testinp = db['tests']

testinp.insert_one({"item": "this is database test in python"})

client.close()