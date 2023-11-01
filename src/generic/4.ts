/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface PropsType {
  title: string;
};

class Component {
  constructor (public props: PropsType) {}
}

class Page extends Component {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};