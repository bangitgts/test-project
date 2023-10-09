interface Columns {
  header: string;
  accessor?: string;
  classNameHeader?: string;
  classNameBody?: string;
  formatter?: string;
}

interface Actions {
  globalAction?: boolean;
  icon?: string;
  content?: string;
  primary?: boolean;
  red?: boolean;
  yellow?: boolean;
  onClick?: any;
}

export { Columns, Actions };
