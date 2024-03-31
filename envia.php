<?php
$nome = addslasches($_POST['nome']);
$email = addslasches($_POST['email']);
$telefone = addslasches($_POST['telefone']);
$coment = addslasches($_POST['coment']);

$para = "devdavidias@gmail.com";
$assunto = "coleta de dados";

$corpo = "nome :".$nome."/n"."email :".$email."/n"."telefone :".$telefone."/n"."coment :".$coment;

$cabeca = "from: devdavidias@gmail.com"."/n"."reply-to: ".$email."/n"."X=Mailer:PHP".phpversion();

if (cmail($para,$assunto,$corpo,$cabeca ) {
    echo("E-mail enviado com sucesso!")

}else {
    echo("Falha ao enviar email!");
}

?>