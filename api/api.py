import os
import datetime 
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///'+os.path.join(basedir, 'data.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Reservation(db.Model):
     __tablename__ = 'reservations'
     id         = db.Column (db.Integer, primary_key = True ,unique = True)
     type       = db.Column (db.String(64))
     n_personne = db.Column (db.Integer, nullable = False)
     available  = db.Column (db.Boolean, nullable = False, default = True)
     price      = db.Column (db.Float, nullable = False)
     arriveDate = db.Column (db.DateTime, nullable = False, default = datetime.date.today())
     departDate = db.Column (db.DateTime, nullable = False, 
     default = datetime.date.today())

class ReservationSchema(ma.SQLAlchemyAutoSchema):
     class Meta:
          model = Reservation

reservation_schema = ReservationSchema()
reservations_schema = ReservationSchema(many = True)

@app.route('/api', methods=['GET'])
def api():
     reservation_all = Reservation.query.all()
     output = reservations_schema.dump(reservation_all)
     return jsonify(output)


@app.route('/api/<id>/', methods=['GET'])
def get_reservation(id):
     reservation = Reservation.query.get(id)
     return reservation_schema.jsonify(reservation)

@app.route('/update/<int:id>', methods=["PUT"])
def update(id):
     reservation = Reservation.query.get(id)


     available = request.json['available']
     departDate = request.json['departDate']
     arriveDate = request.json['arriveDate']
     
     if departDate == datetime.datetime.now():
          reservation.available = True
     else:
          reservation.available = available
     reservation.departDate = datetime.datetime.strptime(departDate, "%Y-%m-%dT%H:%M:%S.%fZ")
     reservation.arriveDate = datetime.datetime.strptime(arriveDate, "%Y-%m-%dT%H:%M:%S.%fZ")

     db.session.commit()
     return reservation_schema.jsonify(reservation)




if(__name__=="__main__"):
     app.run(debug=True)