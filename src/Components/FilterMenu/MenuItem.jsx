import React, { useState } from "react";
import classes from './menuItem.module.css';
import Typography from '@mui/material/Typography';
import {

     Button,

} from "@material-ui/core";

function MenuItem({ isOpened, sostavFilter }) {
     return (
          <div className={classes.control}>
               {!isOpened &&
                    (
                         <div>
                              < div className={classes.control1}>
                                   <Typography variant="h5" component="div">Filters</Typography>
                                   <Button color="inherit" >
                                        remove filters
                                   </Button>
                              </div>
                              <div className={classes.content}>
                                   {sostavFilter.map((objects) =>
                                        < div className={classes.control1} key={objects.id}>
                                             <Typography variant="h6" component="div">{objects.title}</Typography>
                                             <objects.component

                                                  text={objects.text}
                                                  values={objects.sost}
                                                  object={objects.object}
                                                  value={objects.value}
                                                  key={objects.id}
                                                  label={objects.label}
                                                  setValue={objects.setValue}
                                                  addValue={objects.addValue}
                                                  removeValue={objects.removeValue}
                                             />
                                        </div>
                                   )}

                              </div>


                         </div>
                    )
               }

          </div >

     )
}
export default MenuItem