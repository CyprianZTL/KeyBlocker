<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edytor tekstowy</title>
<style>
    textarea {
    width: 400px;
    height: 200px;
}
</style>
</head>
<body>

<textarea id="textInput" placeholder="Napisz coś..."></textarea>

<script>
    // Blokowanie wybranych klawiszy
    const blockedKeys = ['KeyP', 'KeyO', 'KeyK', 'KeyM', 'KeyN', 'KeyJ', 'KeyU', 'KeyH'];

    document.getElementById('textInput').addEventListener('keydown', function(event) {
    if (blockedKeys.includes(event.code)) {
    event.preventDefault();
}
});
</script>

</body>
</html>
