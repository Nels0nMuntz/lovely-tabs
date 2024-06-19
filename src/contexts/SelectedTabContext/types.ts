export interface SelectedTabContext {
  selectedTabId?: string;
  setSelectedTabId?: (id: string) => void;
}

export interface SelectedTabContextProviderProps extends React.PropsWithChildren {}
