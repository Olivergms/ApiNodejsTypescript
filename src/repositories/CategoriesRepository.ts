import { Category } from "../model/Category";
import { ICategoryRepository, ICreateCategoryDto } from "./ICategoriesRepository";



export class CategoriesRepository implements ICategoryRepository{

    private categories: Category[];

    constructor(){
        this.categories = [];
    }

    create({name, description}:  ICreateCategoryDto): void{

        const category = new Category();
        //setta os atributos da classe
        Object.assign(category, { 
            name,
            description,
            created_at: new Date() 
        });

        this.categories.push(category)
    }

    getCategories(): Category[]{
        return this.categories;
    }
    findByName(name: string): Category{
        const category = this.categories.find(c => c.name === name);

        return category;
    }
}