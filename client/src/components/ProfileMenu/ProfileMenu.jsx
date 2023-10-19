import React from 'react'

import {Menu, Avatar, MantineProvider} from '@mantine/core'
const ProfileMenu = ({user,logout}) => {
    return (
        <MantineProvider>
        <Menu>
            <Menu.Target>
                <Avatar src={user?.picture} alt='' radius={'lg'}/>

            </Menu.Target>
            <Menu.Dropdown>

            <Menu.Item>
                    Fav
                </Menu.Item>

            <Menu.Item onClick={()=>{ 

                localStorage.clear();
                logout();
            }}>
                   Logout
        
              </Menu.Item>
            </Menu.Dropdown>
        </Menu>
        </MantineProvider>

    // //            
    // //         </Menu.Dropdown>
    // //        </Menu>
    // //         </MantineProvider> */}
    )
}
export default ProfileMenu
