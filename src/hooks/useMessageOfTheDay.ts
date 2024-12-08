export const useMessageOfTheDay = () => {
    const messages: string[] = [
        "New article is up",
        "Hope your day is wonderfull",
        "Made with attention to detail"
    ];

    const getMessage = () => {
        const index = Math.floor(Math.random() * messages.length)
        return messages[index];
    }
    return { getMessage };
}