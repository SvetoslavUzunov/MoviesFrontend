import { ReactElement } from "react";

export default interface genericListProps {
    list: any;
    loadingUI?: ReactElement;
    emptyListUI?: ReactElement;
    children: ReactElement;
}