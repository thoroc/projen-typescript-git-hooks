type CamelizeString<ObjectProperty extends string> =
  ObjectProperty extends `${infer F}_${infer R}`
  ? `${F}${Capitalize<CamelizeString<R>>}`
  : ObjectProperty;

type Camelize<GenericObject> = {
  [ObjectProperty in keyof GenericObject as CamelizeString<ObjectProperty & string>]:
  GenericObject[ObjectProperty] extends Array<infer ArrayItem>
  ? ArrayItem extends Record<string, unknown>
  ? Array<Camelize<ArrayItem>>
  : GenericObject[ObjectProperty]
  : GenericObject[ObjectProperty] extends Record<string, unknown>
  ? Camelize<GenericObject[ObjectProperty]>
  : GenericObject[ObjectProperty];
};

type Todo = {
  id: number;
  text: string;
  created_date: string;
  is_deleted: boolean;
};
type TodoResponse = {
  items: Todo[];
  next_page?: number;
};

type CamelizedTodoResponse = Camelize<TodoResponse>;

const todoResponse: CamelizedTodoResponse = {
  items: [{
    id: 1,
    text: 'Hello',
    createdDate: '2022-01-01',
    isDeleted: false,
  }],
  nextPage: 1,
};

console.log(todoResponse);