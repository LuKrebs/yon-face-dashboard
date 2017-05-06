
      function changeChart() {
        var a = "img/chart2.png";
        var b = '<p id="estabelecimento" class="text-center"><strong>Fluxo de pessoas: <strong id="green"> +21%</strong></strong></p><span><strong class="text-center"> Semana atual: 1.326  </strong></span></p><p> <strong class="text-center">Semana anterior: 922 </strong></p><p><span id="legend"></span> Semana atual <span id="legendtwo"></span> Semana anterior <div class="dropdown"><i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdown" class="dropdown-content"><a href="#">Apenas a Semana atual</a><a href="#">Apenas a Semana anterior</a><a href="#">Mais opções de gráfico</a></div></div></p> ';
        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }
      function changeChartTwo() {
        var a = "img/chart1.png";
        var b = '<p id="estabelecimento" class="text-center"><strong>Fluxo de pessoas: <strong id="green"> +18%</strong></strong></p><span><strong class="text-center"> Hoje: 256  </strong></span></p><p> <strong class="text-center">Ontem: 188 </strong></p><p><span id="legend"></span> Hoje <span id="legendtwo"></span> Ontem <div class="dropdown"><i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdown" class="dropdown-content"><a href="#">Apenas hoje</a><a href="#">Apenas ontem</a><a href="#">Mais opções de gráfico</a></div></div></p> ';
        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function changeChartThree() {
        var a = "img/chart3.png";
        var b = '<p id="estabelecimento" class="text-center"><strong>Fluxo de pessoas: <strong id="green"> +13%</strong></strong></p><span><strong class="text-center"> Mês atual: 4.328  </strong></span></p><p> <strong class="text-center">Mês anterior: 3.652 </strong></p><p><span id="legend"></span> Mês atual <span id="legendtwo"></span> Mês anterior <div class="dropdown"><i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdown" class="dropdown-content"><a href="#" onclick="chartTreeAtual()">Apenas o mês atual</a><a href="#" onclick="chartTreeAnterior()">Apenas o mês anterior</a><a href="#">Período personalizado</a></div></div></p> ';
        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function chartTreeAtual() {
        var a = "img/chart3atual.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;"><strong>Fluxo de pessoas: </strong></p><span><strong class="text-center"> Mês atual: 4.328  </strong></span></p><p><span id="legend"></span> Mês atual <div class="dropdown"><i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdown" class="dropdown-content"><a href="#" onclick="chartTreeAnterior()">Apenas o mês anterior</a><a href="#" onclick="changeChartThree()">Mês atual e anterior</a><a href="#">Mais opções de gráfico</a></div></div></p> ';
        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function chartTreeAnterior() {
        var a = "img/chart3anterior.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;"><strong>Fluxo de pessoas: </strong></p><span><strong class="text-center"> Mês anterior: 3.652  </strong></span></p><p><span id="legendtwo"></span> Mês anterior <div class="dropdown"><i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdown" class="dropdown-content"><a href="#" onclick="chartTreeAtual()">Apenas o mês atual</a><a href="#" onclick="changeChartThree()">Mês atual e anterior</a><a href="#">Mais opções de gráfico</a></div></div></p> ';
        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function changeChartPieOne() {
        var a = "img/piechart1.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;"><strong>Detalhes sobre Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong> </strong></p><span><strong class="text-center"> Mulheres: 145<strong id="woman"> 56%</strong>   </strong></span></p><p id="test"> <span><strong class="text-center"> Homens: 111<strong id="man"> 44%</strong>   </strong></span><div class="dropdown"><i onclick="myFunctionTwo()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdownTwo" class="dropdown-content"><a href="#">Comparar períodos</a><a href="#">Comparar gêneros com outros dados</a></div></div></p> ';
        document.getElementById('mypiechart').setAttribute("src", a);
        document.getElementById('datetwo').innerHTML = b;
      }

      function changeChartPieTwo() {
        var a = "img/piechart2.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;"><strong>Detalhes sobre Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual  </strong></strong> </strong></p><span><strong class="text-center"> Mulheres: 809<strong id="woman"> 61%</strong>   </strong></span></p><p id="test"> <span><strong class="text-center"> Homens: 517<strong id="man"> 39%</strong>   </strong></span><div class="dropdown"><i onclick="myFunctionTwo()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdownTwo" class="dropdown-content"><a href="#">Comparar períodos</a><a href="#">Comparar gêneros com outros dados</a></div></div></p> ';
        document.getElementById('mypiechart').setAttribute("src", a);
        document.getElementById('datetwo').innerHTML = b;
      }
      
      function changeChartPieThree() {
        var a = "img/piechart3.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;"><strong>Detalhes sobre Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês atual</strong></strong> </strong></p><span><strong class="text-center"> Mulheres: 2.900<strong id="woman"> 67%</strong>   </strong></span></p><p id="test"> <span><strong class="text-center"> Homens: 1.428<strong id="man"> 33%</strong>   </strong></span><div class="dropdown"><i onclick="myFunctionTwo()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdownTwo" class="dropdown-content"><a href="#">Comparar períodos</a><a href="#">Comparar gêneros com outros dados</a></div></div></p> ';
        document.getElementById('mypiechart').setAttribute("src", a);
        document.getElementById('datetwo').innerHTML = b;
      }

      function changeChartBarOne() {
        var a = "img/barchart1.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
          <strong>Detalhes sobre Emoções: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong> </strong></p>\
          <div class="row"><div class="col-md-6 col-xs-6 text-center"><div class="row">\
          <div class="col-md-5 col-xs-6 text-center"><p>Alegria </p><p>Surpresa</p><p>Medo</p></div>\
          <div class="col-md-5 col-xs-6 text-center"><p><span id="emotion">65%</span id="emotion"></p><p><span id="emotion">33%</span id="emotion"></p>\
          <p><span id="emotion">15%</span id="emotion"></p></div></div></div>\
          <div class="col-md-6 col-xs-6 text-center"><div class="row">\
          <div class="col-md-5 col-xs-6 text-center"><p>Raiva </p><p>Desgosto</p><p>Tristeza</p></div>\
          <div class="col-md-5 col-xs-6 text-center"><p><span id="emotion">10%</span id="emotion"></p><p><span id="emotion">18%</span id="emotion"></p>\
          <p><span id="emotion">25%</span id="emotion"></p></div></div></div></div>\
          <div class="dropdown"><i onclick="myFunctionThree()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdownThree" class="dropdown-content">\
          <a href="#">Comparar períodos</a><a href="#">Comparar gêneros com outros dados</a></div></div></p> ';

        document.getElementById('mybarchart').setAttribute("src", a);
        document.getElementById('datethree').innerHTML = b;
      }

      function changeChartBarTwo() {
        var a = "img/barchart2.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
          <strong>Detalhes sobre Emoções: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong> </strong></p>\
          <div class="row"><div class="col-md-6 col-xs-6 text-center"><div class="row">\
          <div class="col-md-5 col-xs-6 text-center"><p>Alegria </p><p>Surpresa</p><p>Medo</p></div>\
          <div class="col-md-5 col-xs-6 text-center"><p><span id="emotion">44%</span id="emotion"></p><p><span id="emotion">62%</span id="emotion"></p>\
          <p><span id="emotion">4%</span id="emotion"></p></div></div></div>\
          <div class="col-md-6 col-xs-6 text-center"><div class="row">\
          <div class="col-md-5 col-xs-6 text-center"><p>Raiva </p><p>Desgosto</p><p>Tristeza</p></div>\
          <div class="col-md-5 col-xs-6 text-center"><p><span id="emotion">15%</span id="emotion"></p><p><span id="emotion">9%</span id="emotion"></p>\
          <p><span id="emotion">13%</span id="emotion"></p></div></div></div></div>\
          <div class="dropdown"><i onclick="myFunctionThree()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdownThree" class="dropdown-content">\
          <a href="#">Comparar períodos</a><a href="#">Comparar gêneros com outros dados</a></div></div></p> ';

        document.getElementById('mybarchart').setAttribute("src", a);
        document.getElementById('datethree').innerHTML = b;
      }

      function changeChartBarThree() {
        var a = "img/barchart3.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
          <strong>Detalhes sobre Emoções: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong> </strong></p>\
          <div class="row"><div class="col-md-6 col-xs-6 text-center"><div class="row">\
          <div class="col-md-5 col-xs-6 text-center"><p>Alegria </p><p>Surpresa</p><p>Medo</p></div>\
          <div class="col-md-5 col-xs-6 text-center"><p><span id="emotion">71%</span id="emotion"></p><p><span id="emotion">19%</span id="emotion"></p>\
          <p><span id="emotion">3%</span id="emotion"></p></div></div></div>\
          <div class="col-md-6 col-xs-6 text-center"><div class="row">\
          <div class="col-md-5 col-xs-6 text-center"><p>Raiva </p><p>Desgosto</p><p>Tristeza</p></div>\
          <div class="col-md-5 col-xs-6 text-center"><p><span id="emotion">9%</span id="emotion"></p><p><span id="emotion">17%</span id="emotion"></p>\
          <p><span id="emotion">5%</span id="emotion"></p></div></div></div></div>\
          <div class="dropdown"><i onclick="myFunctionThree()" class="dropbtn fa fa-cog" aria-hidden="true"></i><div id="myDropdownThree" class="dropdown-content">\
          <a href="#">Comparar períodos</a><a href="#">Comparar gêneros com outros dados</a></div></div></p> ';

        document.getElementById('mybarchart').setAttribute("src", a);
        document.getElementById('datethree').innerHTML = b;
      }

      function changeChartAttOne() {
        var a = "img/barchartatratividade1.png";
        var b = '<div class="row">\
                  <div class="col-md-12">\
                    <div class="row">\
                      <div class="col-md-12 text-center">\
                        <p>Passaram em frente ao produto: <span>256 pessoas</span></p>\
                        <p><span>197 pessoas atraídas pelo produto</span><span id="atraidos"> 77%</span></p>\
                        <p><span> 59 pessoas indiferentes com o produto</span><span id="natraidos"> 23%</span></p>\
                        <p>Nível de atratividade: <span id="nivel">Alto</span></p>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="dropdown">\
                  <i onclick="myFunctionFour()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdownFour" class="dropdown-content">\
                    <a href="#">Comparar atratividade entre produtos</a>\
                    <a href="#" onclick="changeProduct()">Alterar produto em análise</a>\
                  </div>\
                </div>';

        document.getElementById('datefour').innerHTML = b;
        document.getElementById('myattchart').setAttribute("src", a);
      }

      function changeChartAttTwo() { 
        var a = "img/barchartatratividade2.png";
        var b = '<div class="row">\
                  <div class="col-md-12">\
                    <div class="row">\
                      <div class="col-md-12 text-center">\
                        <p>Passaram em frente ao produto: <span>256 pessoas</span></p>\
                        <p><span>835 pessoas atraídas pelo produto</span><span id="atraidos"> 63%</span></p>\
                        <p><span>491 pessoas indiferentes com o produto</span><span id="natraidos"> 37%</span></p>\
                        <p>Nível de atratividade: <span id="nivel">Médio</span></p>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="dropdown">\
                  <i onclick="myFunctionFour()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdownFour" class="dropdown-content">\
                    <a href="#">Comparar atratividade entre produtos</a>\
                    <a href="#" onclick="changeProduct()">Alterar produto em análise</a>\
                  </div>\
                </div>';
        document.getElementById('datefour').innerHTML = b;
        document.getElementById('myattchart').setAttribute("src", a);
      }

      function changeChartAttThree() { 
        var a = "img/barchartatratividade3.png";
        var b = '<div class="row">\
                  <div class="col-md-12">\
                    <div class="row">\
                      <div class="col-md-12 text-center">\
                        <p>Passaram em frente ao produto: <span>256 pessoas</span></p>\
                        <p><span>1558 pessoas atraídas pelo produto</span><span id="atraidos"> 36%</span></p>\
                        <p><span>2770 pessoas indiferentes com o produto</span><span id="natraidos"> 51%</span></p>\
                        <p>Nível de atratividade: <span id="nivel">Baixo</span></p>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="dropdown">\
                  <i onclick="myFunctionFour()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdownFour" class="dropdown-content">\
                    <a href="#">Comparar atratividade entre produtos</a>\
                    <a href="#" onclick="changeProduct()">Alterar produto em análise</a>\
                  </div>\
                </div>';
        document.getElementById('datefour').innerHTML = b;
        document.getElementById('myattchart').setAttribute("src", a);
      }

      function changeProduct() {
        var a = prompt("Qual produto você deseja medir a atratividade?");
        var b = '<div class="row">\
                  <div class="col-md-12">\
                    <div class="row">\
                      <div class="col-md-12 text-center">\
                        <p>Passaram em frente ao produto: <span>0 pessoas</span></p>\
                        <p><span>0 pessoas atraídas pelo produto</span><span id="atraidos"> 0%</span></p>\
                        <p><span>0 pessoas indiferentes com o produto</span><span id="natraidos"> 0%</span></p>\
                        <p>Nível de atratividade: <span id="niveltwo">______</span></p>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="dropdown">\
                  <i onclick="myFunctionFour()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdownFour" class="dropdown-content">\
                    <a href="#">Comparar atratividade entre produtos</a>\
                    <a href="#" onclick="changeProduct()">Alterar produto em análise</a>\
                  </div>\
                </div>';

        document.getElementById('dudalina').innerHTML = a;
        document.getElementById('datefour').innerHTML = b;
      }



      /* When the user clicks on the button, 
      toggle between hiding and showing the dropdown content */
      function myFunction() {
          document.getElementById("myDropdown").classList.toggle("show");
      }
      
      function myFunctionTwo() {
          document.getElementById("myDropdownTwo").classList.toggle("show");
      }


      function myFunctionThree() {
          document.getElementById("myDropdownThree").classList.toggle("show");
      }

      function myFunctionFour() {
          document.getElementById("myDropdownFour").classList.toggle("show");
      }

      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {

          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }