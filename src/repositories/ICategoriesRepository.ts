import { Category } from "../model/Category";

interface ICreateCategoryDto{
    name: string;
    description: string;
}

interface ICategoryRepository{
    findByName(name: string): Category;
    getCategories(): Category[];
    create({name, description}: ICreateCategoryDto): void;
}

export {ICategoryRepository, ICreateCategoryDto} 

