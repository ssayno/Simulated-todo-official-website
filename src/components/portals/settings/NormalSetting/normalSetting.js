import {SideCheckbox} from '../basic/baisc'
export const NormalSetting = () => {
    return (
        <>
            <h6>常规</h6>
            <div className="single-flex">
                <DeleteConfirm />
                <AddTaskAtTop />
                <MoveStarTaskToTop />
                <PlayMusicAfterAddTask />
                <ShowRightClickMenu />
                <OpenReinder />
                <OpenNightMode />
            </div>
            <div>
                <p></p>
            </div>
        </>
    )
}

const DeleteConfirm = () => {
    return(
        <SideCheckbox
            text="在删除前确认"
            defaultCheck={true}
        />
    )
}

const AddTaskAtTop = () => {
    return(
        <SideCheckbox
            text="在顶部添加新任务"
            defaultCheck={true}
        />
    )
}
const MoveStarTaskToTop = () => {
    return(
        <SideCheckbox
            text="将带有星标的任务移到顶部"
            defaultCheck={true}
        />
    )
}

const PlayMusicAfterAddTask = () => {
    return(
        <SideCheckbox
            text="播放完成提示音"
            defaultCheck={true}
        />
    )
}

const ShowRightClickMenu = () => {
    return(
        <SideCheckbox
            text="显示邮件单击菜单"
            defaultCheck={true}
        />
    )
}

const OpenReinder = () => {
    return(
        <SideCheckbox
            text="打开提醒通知"
            defaultCheck={true}
        />
    )
}

const OpenNightMode = () => {
    return(
        <SideCheckbox
            text="打开夜间模式"
            defaultCheck={true}
        />
    )
}

