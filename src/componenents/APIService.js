


export default class APIService {
     static async UpdateReservation(id, body) {
          const resp = await fetch(`http://localhost:5000/update/${id}`, {
               method: 'PUT',

               headers: {
                    'Content-Type': 'application/json',
               },
               body: JSON.stringify(body)
          });
          return await resp.json();
     }
}