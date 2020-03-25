function teal(message) {
    return "[[;teal;]" + message + "]";
}

$('#terminal').terminal(function (command) {
    const help = teal('ls') + " - List of technologies and programming languages I have experience with.";
    if (command === 'help') {
        this.echo(help);
    } else {
        this.echo(command);
    }
}, {
    greetings: "To see available commands type 'help'",
    enabled: false
});
