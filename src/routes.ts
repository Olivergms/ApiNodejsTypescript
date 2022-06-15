import { Request, Response } from 'express'
import CreateCourseService from './CreateCourseService'



export function createCourse(request: Request, response: Response){

    CreateCourseService.execute(
        {
            name : "nodejs",
            duration : 10,
            educator : "adriano"
        }
    );

    return response.send();
}