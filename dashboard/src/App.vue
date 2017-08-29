<template>
 
<div id="app" v-if="$auth.ready()">
  
<!--
   <div class="hold-transition skin-blue sidebar-mini">
     <div class="wrapper">
-->
  
  
<!--
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
-->

<router-view name="header"></router-view>
<router-view name="mainSidebar"></router-view>
 
 
  <!--------------------------
  | Your Page Content Here |
  -------------------------->
  
  <router-view></router-view>

<!--   Content Wrapper. Contains page content -->
<!--  <div class="content-wrapper">-->
   
    <!-- Content Header (Page header) -->
<!--
    <section class="content-header">
      <h1>
        Page Header
        <small>Optional description</small>
      </h1> 
    </section>
-->

    <!-- Main content -->
<!--
    <section class="content container-fluid">
 

    </section>
-->
    
    <!-- /.content -->
<!--  </div>-->
  <!-- /.content-wrapper -->

 
<router-view name="footer"></router-view>
<router-view name="controlSidebar"></router-view>
 
<!--
   </div>
 </div>
-->
  
</div>
  
 
</template>

<script>
export default {
  name: 'app'
}
</script>
