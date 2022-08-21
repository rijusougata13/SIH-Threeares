
from flask import Flask, jsonify, request
import pgeocode

app = Flask(__name__)
dist = pgeocode.GeoDistance('in')


@app.route('/distance', methods=['GET'])
def distance():
    pin1 = request.args.get('pin1')
    pin2 = request.args.get('pin2')
    res = dist.query_postal_code(pin1, pin2)
    return jsonify(res)


# driver function
if __name__ == '__main__':

    app.run()
