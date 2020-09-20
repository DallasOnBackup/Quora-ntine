
fetch('https://www.quora.com/webnode2/server_call_POST?_h=1hHjexbrmc5cXZ&_m=send_message', {
    method: 'POST',
    headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:80.0) Gecko/20100101 Firefox/80.0',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'en-US,en;q=0.5',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'Origin': 'https://www.quora.com',
        'Connection': 'keep-alive',
        'Referer': 'https://www.quora.com/messages/thread/9046691',
        'TE': 'Trailers',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache'
    },
    body: 'json=%7B%22args%22%3A%5B%5D%2C%22kwargs%22%3A%7B%22id%22%3A9046691%2C%22input%22%3A%22Apples+are+tasty%22%7D%7D&revision=b78919e9c4034552ba8ecc2348fa7db8e1d7fdac&page_load_uid=1234547874&formkey=fe3b1bbd462f96c3091b47053e0aba5c&postkey=d14f857cbd6509c7534fcc539e9b48c7&window_id=broadcast_desktop_pwqlbzacmeebopjq&referring_controller=messages&referring_action=thread&broadcast_id=main-w-chan51-8888-broadcast_desktop_pwqlbzacmeebopjq-TdD2&__hmac=1hHjexbrmc5cXZ&__method=send_message&__e2e_action_id=frcni99cj6&js_init=%7B%22id%22%3A9046691%2C%22input%22%3A%22message_textarea%22%2C%22draft_space%22%3Anull%2C%22unsaved_content_msg%22%3A%22Your+content+has+not+been+saved.%22%2C%22focus_onload%22%3Atrue%2C%22is_qtext%22%3Afalse%2C%22require_comment%22%3Afalse%2C%22require_value%22%3Atrue%2C%22content_type%22%3Anull%2C%22submit_text%22%3A%22Send%22%2C%22show_editor%22%3Atrue%7D&__metadata=%7B%7D'
});
