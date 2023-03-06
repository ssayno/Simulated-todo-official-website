export const Daily = () => {
    const getCurrentTime = () => {
        const months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        const days = ['日', '一', '二', '三', '四', '五', '六'];
        const now = new Date();
        const month = months[now.getUTCMonth()];
        const day = `星期${days[now.getDay()]}`;
        const date = `${now.getDate()}日`;
        return `${month} ${date} ${day}`
    }
    return (
        <div>
            <span>{getCurrentTime()}</span>
            <div className="add">
                <div className="first-add">
                    <span id="task">添加任务</span>
                </div>
                <div className="second-add">
                    <span>a</span>
                    <span>b</span>
                    <span>c</span>
                </div>
            </div>
        </div>
    )
}