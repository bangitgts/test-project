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
  onClick?: void;
  primary?: boolean;
  red?: boolean;
  yellow?: boolean;
}

export { Columns, Actions };
