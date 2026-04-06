const WORK_HOURS = 8;
const SLEEP_TIME = WORK_HOURS * 60 * 60 * 1000;

while (true) {
    mcp.readJiraTasks();
    mcp.autoApproveMRs();
    writeCode();
    drinkCoffee();
    // TODO: after mvp
    // takeOverTheWorld(); 
    await new Promise(resolve => setTimeout(resolve, SLEEP_TIME));
}