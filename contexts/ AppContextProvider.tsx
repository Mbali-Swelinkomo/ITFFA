//Create Context API so that can be able to pass API response data from one page to the next 
import { JsxEmit } from 'typescript';
import React, { createContext, useState, useEffect, ReactNode } from 'react';


type User = {
    name: string;
    surname: string;
    email: string;
  };

  type AppContextProps = {
    isQuickMenuVisible: boolean;
    setIsQuickMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
    user: User | any;
    setUser: React.Dispatch<React.SetStateAction<User | any>>;
    jobTitle: any | null;
    setJobTitle: (jobTitle: any) => void;
  };

  export const AppContext = createContext<AppContextProps>({
    isQuickMenuVisible: false,
    setIsQuickMenuVisible: () => {},
    user: null,
    setUser: () => {},
    jobTitle: null,
    setJobTitle: () => {},
  });

  export const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isQuickMenuVisible, setIsQuickMenuVisible] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [jobTitle, setJobTitle] = useState<any | null>(null);

    useEffect(() => {
        
        const jobTitleData = localStorage.getItem('jobTitle');
        if (jobTitleData) {
          setJobTitle(JSON.parse(jobTitleData));
        }
    }, [jobTitle]);

    useEffect(() => {
        if (jobTitle) {
            localStorage.setItem('Job Title', JSON.stringify(jobTitle));
        }
  
      },[]);
    return (
        <AppContext.Provider value={{ 
            isQuickMenuVisible, 
            setIsQuickMenuVisible, 
            user, 
            setUser,
            jobTitle,
            setJobTitle
            }}>

          {children}
        </AppContext.Provider>
      );
    };

export default AppContext;
