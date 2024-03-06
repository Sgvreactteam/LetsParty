import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
  import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    HomeIcon,
  } from "@heroicons/react/24/solid";
  import { Link } from "react-router-dom";
  
  export function Sidebar() {
    return (
      <Card className=" w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 font-pop">
        <div >
        <List className=" flex flex-col ">
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
            <Link to={item.link}>
              <ListItem key={index}>
                <ListItemPrefix>{item.icon}</ListItemPrefix>
                {item.title}
              </ListItem>
            </Link>
          ))}
        </List>
        </div>
      </Card>
    );
  }
  