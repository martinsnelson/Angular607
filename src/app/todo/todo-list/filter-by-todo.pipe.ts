import { PipeTransform, Pipe } from "@angular/core";
import { DatePipe } from "@angular/common";

import { Todo } from "../models/todo";

@Pipe({
    name: 'filterByDescription'
})
export class FilterByTodo implements PipeTransform {

    // constructor(private datepipe: DatePipe) {
    // }

    transform(todos: Todo[], descriptionQuery: string) {

        if (descriptionQuery && descriptionQuery.length > 1) {
            descriptionQuery.trim().toLowerCase();
            return todos.filter(todo =>
                todo.description.includes(descriptionQuery)
            );
        }
        else {
            return todos;
        }
    }


    // transform(values: any[], descriptionQuery: string) {

    //     if (descriptionQuery && descriptionQuery.length > 1) {
    //         descriptionQuery.trim().toLowerCase();
    //         return values.filter(value =>
    //             value.transaction.some(elTransaction =>
    //                 elTransaction.conta.includes(descriptionQuery))
    //         );
    //     }
    //     else {
    //         return values;
    //     }
    // }


    // transform(values: any[], descriptionQuery: string) {

    //     if (descriptionQuery && descriptionQuery.length >= 9) {
    //         descriptionQuery.trim().toLowerCase();
    //         descriptionQuery = this.datepipe.transform(descriptionQuery, 'yyyy-MM-dd');

    //         return values.filter(value =>
    //             value.day.toLowerCase().includes(descriptionQuery)
    //         );
    //     }
    //     else {
    //         return values;
    //     }
    // }

}