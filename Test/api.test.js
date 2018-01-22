const httpMocks = require('node-mocks-http');
const controller = require('./../api/controllers/student');

const inputCorretto = {
  assignment_type: "ea",
  student_id: "ut velit",
  assigment_id: "amet nostrud",
  content: {}
}

describe('example', () => {
    test('controllo il json', () => {
        const request = httpMocks.createRequest({
            method: 'post',
            url: 'https://simulazioneesame2.herokuapp.com/assignment',
            body: inputCorretto
        });

        const response = httpMocks.createResponse();

        controller.addStudent(request, response);

        const property = JSON.parse(response._getData());

        expect(property).toEqual(inputCorretto);
    });
});
