import { Category } from "../model/Category";

interface ICreateCategoryDto{
    name: string;
    description: string;
}

export class CategoriesRepository{

    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({name, description}: ICreateCategoryDto): void{

        const category = new Category();
        //setta os atributos da classe
        Object.assign(category, { 
            name,
            description,
            created_at: new Date() 
        });

        this.categories.push(category)
    }
}