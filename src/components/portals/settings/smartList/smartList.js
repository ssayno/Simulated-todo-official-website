import {SideCheckbox} from "../basic/baisc";

export const SmartList = () => {
    return(
        <>
            <div className="single-flex">
                <h5>智能列表</h5>
                <Significant />
                <InPlan />
                <ALLSide />
                <FinishedTask />
                <AlreadyAssignToMe />
                <HideEmptyTask />
                <ShowDDLInDaily />
            </div>
        </>
    )
}
const Significant = () => {
    return(
        <SideCheckbox
            text="重要"
            defaultCheck={true}
        />
    )
}

const InPlan = () => {
    return(
        <SideCheckbox
            text="计划内"
            defaultCheck={true}
        />
    )
}
const ALLSide = () => {
    return(
        <SideCheckbox
            text="全部"
            defaultCheck={true}
        />
    )
}

const FinishedTask = () => {
    return(
        <SideCheckbox
            text="已完成"
            defaultCheck={true}
        />
    )
}

const AlreadyAssignToMe = () => {
    return(
        <SideCheckbox
            text="已分配给我"
            defaultCheck={true}
        />
    )
}

const HideEmptyTask = () => {
    return(
        <SideCheckbox
            text="自动隐藏空的智能列表"
            defaultCheck={true}
        />
    )
}

const ShowDDLInDaily  = () => {
    return(
        <SideCheckbox
            text={`在"我的一天"中显示"今天截止"的任务`}
            defaultCheck={true}
        />
    )
}