<script>
  $(function()
  {
    $('#username').focus(function()
    {
      $('#sign-input1').addClass('blue');
      $('#sign-input2').addClass('blue1');
    });
    $('#username').blur(function()
    {
      $('#sign-input1').removeClass('blue');
      $('#sign-input2').removeClass('blue1');
    });

    $('#password').focus(function()
    {
      $('#sign-input2').addClass('blue');
    });
    $('#password').blur(function()
    {
      $('#sign-input2').removeClass('blue');
    });

    $('#username').change(function()
    {
      fsubmitstyle();
    });
    $('#password').change(function()
    {
      fsubmitstyle();
    });

    $('#username').keyup(function()
    {
      fsubmitstyle();
    });
    $('#password').keyup(function()
    {
      fsubmitstyle();
    });

    function fsubmitstyle()
    {
      var v1 = $('#username').val();
      var v2 = $('#password').val();
      if(v1 != "" && v2 != "")
      {
        $('#submit').css({'opacity': 1});
      }
      else
      {
        $('#submit').css({'opacity': '0.3'});
      }
    }
  });
  </script>