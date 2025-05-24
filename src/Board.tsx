import { Box, FormControlLabel, Switch, Typography } from "@mui/material";
import { borderCoords, questA, questB } from "./tasks/tasks";
import { useTracker } from "./tracker";
import { FullBox } from "./components/boxes";
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import MapView from "./components/MapView";
import ConfirmationDialog from "./components/ConfirmationDialog";
import { useLocalStorage } from "./useLocalStorage";
import SuccessScreen from "./components/SuccessScreen";
import { DoneScreen } from "./components/DoneScreen";
import { PrimaryButton } from "./components/buttons";

interface IProps {
}

export function Board(props: IProps) {
    const[quest, setQuest] = useLocalStorage("geo_quest", "");


    const tasks = quest == "questA" ? questA : questB

    const [openSuccess, setOpenSuccess] = useState(false)
    const handleOpenSuccess = () => {
        setOpenSuccess(true)
    }
    const handleCloseSuccess = () => {
        setOpenSuccess(false)
    }

    const [track, setTrack] = useLocalStorage("geo_track", false)
    const [next, currentLocation, done, locationError, skip, prev, reset, _1, _2] = useTracker(tasks, track, handleOpenSuccess)

    const pages = [ "Aufgabe", "Karte", "Opt."]
    const [page, setPage] = useState(pages[0])

    const [showTarget, setShowTarget] = useState(false)


    const task = tasks[next]
    const doneLocations = tasks.filter((_, index) => done || index < next || (showTarget && index <= next)).map((t) => t.location)


    const trackToggle = () => {
        setTrack(!track);
    }
    const showToggle = () => {
        setShowTarget(!showTarget);
    }

    const handleReset = () => {
        reset()
        setQuest("")
    }

    return (
        <FullBox>
            <NavBar pages={pages} currentPage={page} setPage={setPage} />
            {page == "Aufgabe" && (
                <FullBox sx={{backgroundColor: "secondary.light"}}>
                    {quest == "" && (
                        <Box display="flex" flexDirection="column" gap="40px" padding="40px">
                            <PrimaryButton onClick={()=> setQuest("questA")}>A</PrimaryButton>
                            <PrimaryButton onClick={()=> setQuest("questB")}>B</PrimaryButton>
                        </Box>
                    )}

                    {quest != "" && !done && task && task.screen}

                    {done && <DoneScreen />}

                    <SuccessScreen open={openSuccess} handleClose={handleCloseSuccess}/>

                    {locationError && (
                        <Typography color="error">{locationError}</Typography>
                    )}
                </FullBox>
            )}
            {page == "Karte" && (
                <FullBox>
                    <MapView
                        border={borderCoords} 
                        current={currentLocation}
                        route={[]}
                        locations={doneLocations}
                        zoom={14}
                    />
                </FullBox>
            )}
            {page == "Opt." && (
                <Box display="flex" flexDirection="column" gap="20px" padding="20px">
                    <FormControlLabel
                        control={
                            <Switch
                            checked={track}
                            onChange={trackToggle}
                            color="primary"
                            />
                        }
                        label="Strandort tracken"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                            checked={showTarget}
                            onChange={showToggle}
                            color="primary"
                            />
                        }
                        label="Ziel anzeigen"
                    />

                    <ConfirmationDialog
                        buttonText="Diese Aufgabe Überspringen"
                        confirmationText="Willst du die nächste Aufgabe wirklich überspringen"
                        onAccept={skip}
                        onDecline={() => {}}
                    />

                    <ConfirmationDialog
                        buttonText="Zur vorherigen Aufgabe"
                        confirmationText="Willst du die wirklich zur vorherigen Aufgabe zurück gehen"
                        onAccept={prev}
                        onDecline={() => {}}
                    />

                    <ConfirmationDialog
                        buttonText="Daten zurück setzen"
                        confirmationText="Willst du die wirklich die ganzen Daten zurück setzen"
                        onAccept={handleReset}
                        onDecline={() => {}}
                    />
                </Box>
            )}
        </FullBox>
    )
}