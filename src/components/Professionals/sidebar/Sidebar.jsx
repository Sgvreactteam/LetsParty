import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
import { useState } from "react";
  
  export function Sidebar() {

    const [list, setlist] = useState(0)

    const handleClickList = (index) =>{
      setlist(index)
    }
    return (
      <Card className=" w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 font-pop">
        <div >
        <List className=" flex flex-col text-lg gap-2 ">
          {[
            {
              link: "/",
              title: "Create Announcement",
            },
            {
              link: "/myaccount",
              title: "my Account",
            },
            {
              link: "/myannouncements",
              title: "My Announcements",
            },
          ].map((item, index) => (
            <Link to={item.link} className={list == index ? "text-[#6757EC]" : ""} onClick={handleClickList.bind(this,index)}> 
              <ListItem key={index}>
                {item.title}
              </ListItem>
            </Link>
          ))}
        </List>
        </div>
      </Card>
    );
  }
  