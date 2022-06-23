import { Router } from 'express'
import { Category } from '../model/Category';


const categories: Category[] = [];

const categoriesRoutes = Router();


categoriesRoutes.post('/', (request, response) => {
    const { name, description} = request.body;

    const category: Category = new Category();

    //setta os atributos da classe
    Object.assign(category, { 
        name,
        description,
        created_at: new Date() 
    });

    categories.push(category)

    return response.status(201).json(category);
})

export { categoriesRoutes } ;