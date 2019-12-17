@component('mail::message')
# Change Pwd Request

Click on the button to change your password.

@component('mail::button', ['url' => 'http://localhost:4200/response-password-reset?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
