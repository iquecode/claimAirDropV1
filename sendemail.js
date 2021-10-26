function showDialog(msg, type='info', time=3000){
    const old_dialog = document.getElementById('iquedev-msg-dialog');
    if (old_dialog) {
        old_dialog.remove(); 
    }
    
    // monta o css da mensagem para que fique flutuando na frente de todos elementos da página
    //var cssMessage = "display: block; position: fixed; bottom: 0; margin-bottom: 200px; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999";
    const cssMessage = "display: block; position: fixed; top: 50%; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999";
    const cssInner = "margin: 0 auto; box-shadow: 1px 1px 5px black;";

    // monta o html da mensagem com Bootstrap
    let dialog = "";
    dialog += '<div id="iquedev-msg-dialog" style="'+cssMessage+'">';
    dialog += '    <div class="alert alert-'+type+' alert-dismissable" style="'+cssInner+'">';
    dialog += '    <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>';
    dialog +=          msg;
    dialog += '    </div>';
    dialog += '</div>';

    // adiciona ao body a mensagem com o efeito de fade
    $("body").append(dialog);
    $("#iquedev-msg-dialog").hide();
    //$("#iquedev-msg-dialog").fadeIn(200);

}

function ResponseFormContact(data, status=true)
{
    enableForm();
    if (status == true) // resposta ok do serviço de email do backend
    {
        console.log(data.result);
        if (data.result == true)
        {
            const msg = "<strong>Sua mensagem foi enviada com sucesso!</strong><br>Retornaremos em breve.";
            showDialog(msg, "success", 7000);
            document.getElementById('contact-form').reset();
        }
        else
        {
            console.log(data.error);
            console.log(data);
            const msg = "<strong>Erro de envio!</strong><br>" + data.error;
            showDialog(msg, "danger", 7000);
        }
    }
    else
    {
        const msg = "<strong>Erro no envio!</strong><br>" + data;
        showDialog(msg, "danger", 7000);
    }
}

function enableForm()
{   
    document.getElementById("name-alt").removeAttribute("disabled");
    document.getElementById("email-alt").removeAttribute("disabled");
    document.getElementById("txn-alt").removeAttribute("disabled");
    document.getElementById("address-alt").removeAttribute("disabled");
    document.getElementById("btn-submit-alt").setAttribute("onclick", "sendFormPHP()");
}

function disableForm()
{
    document.getElementById("name-alt").setAttribute("disabled", "disabled");
    document.getElementById("email-alt").setAttribute("disabled", "disabled");
    document.getElementById("txn-alt").setAttribute("disabled", "disabled");
    document.getElementById("address-alt").setAttribute("disabled", "disabled");
    document.getElementById("btn-submit-alt").removeAttribute("onclick"); 
}

function validateForm() 
{
    // const name    =   document.getElementById('name').value;
    // const email   =   document.getElementById('email').value; 
    // const phone   =   document.getElementById('phone').value.replace(/\D/g, '');
    // const subject =   document.getElementById('subject').value;  
    // const message =   document.getElementById('message').value;

    // if ( name.length    < 10 )  throw 'Nome completo precisa ter pelo menos 10 caracteres';
    // if ( email.length   <  3 )  throw 'Digite um email válido';
    // if ( phone.length   < 10 )  throw 'Número de telefone inválido';
    // if ( subject.length < 1  )  throw 'O campo assunto deve ser preenchido';
    // if ( message.length < 10 )  throw 'O campo mensagem deve conter pelo menos 10 caracteres';

}

function sendFormPHP()
{
    try 
    {
        // validateForm();
        const data = new FormData( document.getElementById('form-alt') );
        // disableForm();
        // const msg = "<strong>Mensagem sendo enviada!</strong><br>Aguardando retorno do servidor!";
        // showDialog(msg, "dark", 50000);
        const url = "sendFormContact.php"
        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: data
        }
        fetch(url, options)
        .then(response =>{ response.json()
            .then( data => ResponseFormContact(data, true))
        })
        .catch(e => ResponseFormContact(e, false))

    }
    catch (e) 
    {
        showDialog(e, "danger", 7000);
    }
}

//document.getElementById("btn-submit-alt").onclick = sendFormPHP;