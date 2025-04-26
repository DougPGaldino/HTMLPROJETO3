<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $servername = "Burguer_Art";
    $username = "Usuario1";
    $password = "12345";
    $dbname = "Burguer_Art";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexão com o banco de dados falhou: " . $conn->connect_error);
    }

    $sql = "INSERT INTO mensagens (nome, email, mensagem) VALUES ('$nome', '$email', '$mensagem')";

    if ($conn->query($sql) === TRUE) {
        $destinatario = "email@gmail.com";
        $assunto = "Nova mensagem do formulário de contato";
        $mensagem_email = "Nome: $nome\nE-mail: $email\nMensagem: $mensagem";
        mail($destinatario, $assunto, $mensagem_email);

        header("Location: contact.html?success=true");
        exit();
    } else {
        echo "Erro ao inserir dados: " . $conn->error;
    }

    $conn->close();
}
?>
