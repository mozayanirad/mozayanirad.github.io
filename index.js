   
   $(document).ready(function()
   {
      $("#PanelLayer").panel({animate: true, animationDuration: 200, animationEasing: 'easeOutCubic', dismissible: false, display: 'push', position: 'left'});
   });
   
   var wb_Timer1;
   function TimerStartTimer1()
   {
      wb_Timer1 = setTimeout(function()
      {
         var event = null;
         ShowPanel('PanelLayer', event);
      }, 200);
   }
   function TimerStopTimer1()
   {
      clearTimeout(wb_Timer1);
   }
   TimerStartTimer1();
   