window._genesys = {
    widgets: {
     main: { 
     // Funcion para el color que se le dara light(color claro) dark(obscuro)	  
          theme: "light",
          //Lenguaje 
          lang: "en",
           // Enter a URL that points to
          //i18n: "http://HOST:PORT/path/to/lanaguages/file.json"

          // OR define the JSON object inline
                        i18n: {
  "en": {
      "webchat": {
          "ChatButton": "Chat",
          "ChatStarted": "Chat inicializado",
          "ChatEnded": "Chat finalizado",
          "AgentNameDefault": "Agente",
          "AgentConnected": "<%Agent%> Conectado",
          "AgentDisconnected": "<%Agent%> Desconectado",
          "SupervisorNameDefault": "Supervisor",
          "SupervisorConnected": "<%Agent%> Conectado",
          "SupervisorDisconnected": "<%Agent%> Desconectar",
          "AgentTyping": "...",
          "AgentUnavailable": "Lo siento, no hay agentes disponibles por favor intente mas tarde",
          "ChatTitle": "Promotora Kranon",
          "ChatEnd": "X",
          "ChatClose": "X",
          "ChatMinimize": "Min",
          "ChatFormFirstName": "Nombre",
          "ChatFormLastName": "Apellido",
          "ChatFormNickname": "Sobrenombre",
          "ChatFormEmail": "Email",
          "ChatFormSubject": "Subject",
          "ChatFormPlaceholderFirstName": "Requerido",
          "ChatFormPlaceholderLastName": "Requerido",
          "ChatFormPlaceholderNickname": "Requerido",
          "ChatFormPlaceholderEmail": "Requerido",
          "ChatFormPlaceholderSubject": "Requerido",
          "ChatFormSubmit": "Iniciar chat",
          "ChatFormCancel": "Cancelar",
          "ChatFormClose": "Cerrar",
          "ChatInputPlaceholder": "Escribe tu mensaje aqui...",
          "ChatInputSend": "Enviar",
          "ChatEndQuestion": "¿Estás seguro de que quieres terminar esta sesión de chat?",
          "ChatEndCancel": "Cancelar",
          "ChatEndConfirm": "Cerrar chat",
          "ConfirmCloseWindow": "¿Estás seguro de que quieres cerrar el chat?",
          "ConfirmCloseCancel": "Cancelar",
          "ConfirmCloseConfirm": "Cerrar",
          "ActionsDownload": "Descargar transcripciónt",
          "ActionsEmail": "Transcribir email ",
          "ActionsPrint": "Transcribir impresion ",
          "ActionsCobrowseStart": "Iniciar Co-browse",
          "ActionsSendFile": "Enviar archivo",
          "ActionsCobrowseStop": "Cerrar Co-browse",
          "ActionsVideo": "Invitar al Video Chat",
          "ActionsTransfer": "Transferir",
          "ActionsInvite": "Invitar",
          "InstructionsTransfer": "Abra este enlace en otro dispositivo para transferir su sesión de chat </br></br><%link%>",
          "InstructionsInvite": "Comparte este enlace con otra persona para agregarlos a esta sesión de chat. </br></br><%link%>",
          "InviteTitle": "¿Necesitas ayuda?",
          "InviteBody": "Háganos saber si podemos ayudar.",
          "InviteReject": "No gracias",
          "InviteAccept": "Iniciar chat",
          "ChatError": "Hubo un problema al iniciar la sesión de chat. Por favor, intenta de nuevo.",
          "ChatErrorButton": "OK",
          "DownloadButton": "Descargar",
          "FileSent": "ha enviado:",
          "FileTransferRetry": "Procesar de nuevo",
          "FileTransferError": "OK",
          "FileTransferCancel": "Cancelar",
          "RestoreTimeoutTitle": "Chat finalizado",
          "RestoreTimeoutBody": "Tu sesión de chat anterior ha expirado. ¿Te gustaría empezar uno nuevo?",
          "RestoreTimeoutReject": "No, gracias",
          "RestoreTimeoutAccept": "Iniciar chat",
          "EndConfirmBody": "¿Realmente te gustaría terminar tu sesión de chat?",
          "EndConfirmAccept": "Chat finalizado",
          "EndConfirmReject": "Cancelar",
          "SurveyOfferQuestion": "¿Te gustaría participar en una encuesta?",
          "ShowSurveyAccept": "Si",
          "ShowSurveyReject": "No",
          "UnreadMessagesTitle": "No leido",
          "AriaYouSaid": "Tu dijiste",
          "AriaSaid": "Dijo",
          "AriaSystemSaid": "Sistema dijo",
          "AriaMinimize": "Minimizar chat",
          "AriaMaximize": "Maximizar chat",
          "AriaClose": "Cerrar chat",
          "AsyncChatEnd": "Fin del Chat",
          "AsyncChatClose": "Cerrar ventana",
          "DayLabels": [
              "Domingo",
              "Lunes",
              "Martes",
              "Miercoles",
              "Jueves",
              "Viernes",
              "Sabado"
          ],
          "MonthLabels": [
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre"
          ],
          "todayLabel": "Hoy",
          "Errors": {
              "102": "Tu nombre es requerido",
              "103": "Tu apellido es requerido",
              "161": "Please enter your name",
              "201": "El archivo no pudo ser enviado.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>The maximum number of attached files would be exceeded (<%MaxFilesAllowed%>)</p>",
              "202": "El archivo no pudo ser enviado.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>Upload limit and/or maximum number of attachments would be exceeded (<%MaxAttachmentsSize%>)</p>",
              "203": "El archivo no pudo ser enviado.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>File type is not allowed.</p>",
              "204": "Lo sentimos pero tu mensaje es demasiado largo. Por favor escriba un mensaje mas corto",
              "240": "Lo sentimos, pero no podemos iniciar un nuevo chat en este momento. Por favor, inténtelo de nuevo más tarde",
              "364": "Dirección de correo electrónico no válida",
              "ChatUnavailable": "Lo sentimos, pero no podemos iniciar un nuevo chat en este momento. Por favor, inténtelo de nuevo más tarde",
              "CriticalFault": "Su sesión de chat ha finalizado inesperadamente debido a un problema desconocido. Pedimos disculpas por las molestias",
              "StartFailed": "Hubo un problema al iniciar tu sesión de chat. Verifique su conexión y que haya enviado correctamente toda la información requerida, luego intente nuevamente",
              "MessageFailed": "Su mensaje no fue recibido con éxito. Inténtalo de nuevo",
              "RestoreFailed": "Lo sentimos, pero no pudimos restaurar tu sesión de chat debido a un error desconocido",
              "TransferFailed": "No se puede transferir el chat en este momento. Por favor, inténtelo de nuevo más tarde",
              "FileTransferSizeError": "El archivo no pudo ser enviado.<br/><strong><p class='filename' title='<%FilenameFull%>'>'<%FilenameTruncated%>'</p></strong><p class='cx-advice'>File size is larger than the allowed size (<%MaxSizePerFile%>)</p>",
              "InviteFailed": "No se puede generar invitar en este momento. Por favor, inténtelo de nuevo más tarde",
              "ChatServerWentOffline": "Los mensajes se están demorando más de lo normal para comunicarse. Lamentamos el retraso.",
              "RestoredOffline": "Los mensajes se están demorando más de lo normal para comunicarse. Lamentamos el retraso.",
              "Disconnected": "<div style='text-align:center'>Conexion perdida</div>",
              "Reconnected": "<div style='text-align:center'>Conexion restaurada</div>",
              "FileSendFailed": "El archivo no pudo ser enviado.<br/><strong><p class='filename' title='<%FilenameFull%>'><%FilenameTruncated%></p></strong><p class='cx-advice'>There was an unexpected disconnection. Try again?</p>",
              "Generic": "<div style='text-align:center'>Ocurrió un error inesperado</div>"
          }
      }
  }
}
      },			
      
      webchat: {
      //Funcion para mandar Emojis
        emojis: true,
      //Funcion para quitar el boton de enviar 
        uploadsEnabled: false,
      //Funcion para confirmacion de cerrar el chat
        confirmFormCloseEnabled: true, 
      //Funcion para configurar el horario en 12 o en 24(omitir esta siguiente linea)
        timeFormat:12,
      //Funcion para poder mostrar el siguiente message
        actionsMenu:true,
        // funcionalidad para el chat
        chatButton: { 
              enabled: true, 
              template:"<div class='cx-widget cx-webchat-chat-button' data-message='ChatButton' data-gcb-service-node='true'><div class='cx-icon' data-icon='chat'></div><span class='i18n' data-message='INICIAR'></span></div>",
              //Forma "slide" deslizar de animacion,"fade" de desvanecerse
              effect: 'fade', 
              openDelay: 1000, 
              effectDuration: 300, 
              hideDuringInvite: true 
      },
      minimizarOnMobileRestore: false,		
        transport: {
          type: 'purecloud-v2-sockets',
          dataURL: 'https://api.mypurecloud.com',
          deploymentKey : 'a259779a-b2ae-4f8e-8538-4a1087afb6f3',
          orgGuid : '1ff284d1-cc85-4312-96ac-8c3a5941c3f6',
          interactionData: {
            routing: {
              targetType: 'QUEUE',
              targetAddress: 'ChatKranonPag2',
              priority: 5
            }
          }
        },
        userData: {
          phoneNumber: '',
          customField1: '',
          customField2: '',
        }
      }
    }
  };
  const customPlugin = CXBus.registerPlugin('Custom');

// Advanced Configuration

  function getAdvancedConfig() {
    return {
        form: {
            autoSubmit: false,
            firstname: '',
            email: '',
            phoneNumber: '',
            customField1:'',
            customField2:''
            
        },
        formJSON: {
            wrapper: '<table></table>',
            inputs: [

                // Default fields
                {
                    id: 'cx_webchat_form_firstname',
                    name: 'firstname',
                    maxlength: '100',
                    placeholder: 'Obligatorio',
                    label: 'Nombre'
                },						
                {
                    id: 'custom_field_1',
                    name: 'customField1',
                    maxlength: '100',
                    placeholder: 'Obligatorio',
                    label: 'Empresa'
                },
                {
                    id: 'cx_webchat_form_email',
                    name: 'email',
                    maxlength: '100',
                    placeholder: 'Obligatorio',
                    label: 'Correo'
                },
                {
                    id: 'cx_webchat_form_phoneNumber',
                    name: 'phoneNumber',
                    maxlength: '100',
                    placeholder: 'Obligatorio',
                    label: 'Teléfono'
                },
                // Custom Fields
                {
                    id: 'custom_field_2',
                    name: 'customField2',
                    maxlength: '100',
                    placeholder: 'Obligatorio',
                    label: 'Mensaje'
                }
            ]
        }
    };
}		