import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { useDispatch} from 'react-redux';
import { updateTask } from '../../actions/tasks';
import useSound from 'use-sound';
import boopSfx from '../../sounds/boop.mp3';

export default function StandaloneToggleButton({x,task}) {
  const [selected, setSelected] = React.useState(task.Completed?true:false);
  const [toggle, settoggle] = React.useState(task.Completed?true:false);
  const dispatch = useDispatch();
  const [play] = useSound(boopSfx);

  return (
    <ToggleButton 
      value="check"
      color='success'
      selected={selected}
      onChange={() => {
        setSelected(!selected);
        settoggle(!toggle);
        task.Completed = !task.Completed;
        console.log(task);
        play();
        dispatch(updateTask(task));
      }}
    >
     {toggle && <CheckIcon style={{ fontSize: "1em" }}/>} 
    </ToggleButton>
  );
}