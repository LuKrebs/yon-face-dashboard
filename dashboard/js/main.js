
      function changeChart() {
        var a = "img/chart2.png";
        var b = '<p id="estabelecimento" class="text-center">\
                  <strong>Fluxo de pessoas: <strong id="green"> +21%</strong></strong>\
                </p>\
                <span><strong class="text-center"><span id="legend"></span> Semana atual: 1.326  </strong></span></p>\
                <p> <strong class="text-center"><span id="legendtwo"></span> Semana anterior: 922 </strong></p>\
                <div class="dropdown">\
                  <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdown" class="dropdown-content">\
                    <a style="cursor:pointer;" onclick="changeChartSemanaAtual()">Apenas a Semana atual</a>\
                    <a style="cursor:pointer;" onclick="changeChartSemanaAnterior()">Apenas a Semana anterior</a>\
                    <a style="cursor:pointer;">Mais opções de gráfico</a>\
                  </div>\
                </div></p>';
        
        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function changeChartSemanaAtual() {
        var a = "img/chart3testsemanaatual.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Fluxo de pessoas: </strong>\
                </p>\
                <p><span><strong class="text-center"><span id="legend"></span> Semana Atual: 1.326  </strong></span></p>\
                <div class="dropdown">\
                  <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdown" class="dropdown-content">\
                    <a style="cursor:pointer;" onclick="changeChartSemanaAnterior()">Apenas Semana anterior</a>\
                    <a style="cursor:pointer;" onclick="changeChart()">Semana atual e anterior</a>\
                    <a style="cursor:pointer;">Mais opções de gráfico</a>\
                  </div>\
                </div>';

        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function changeChartSemanaAnterior() {
        var a = "img/chart3testsemanaanterior.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Fluxo de pessoas: </strong>\
                </p>\
                <p><span><strong class="text-center"><span id="legendtwo"></span> Semana Anterior: 922  </strong></span></p>\
                <div class="dropdown">\
                  <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdown" class="dropdown-content">\
                    <a style="cursor:pointer;" onclick="changeChartSemanaAtual()">Apenas Semana atual</a>\
                    <a style="cursor:pointer;" onclick="changeChart()">Semana atual e anterior</a>\
                    <a style="cursor:pointer;">Mais opções de gráfico</a>\
                  </div>\
                </div>';

        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }
      
      function changeChartTwo() {
        var a = "img/chart1correto.png";
        var b = '<p id="estabelecimento" class="text-center">\
                  <strong>Fluxo de pessoas: <strong id="green"> +18%</strong></strong>\
                </p>\
                <span><strong class="text-center"><span id="legend"></span> Hoje: 256  </strong></span></p>\
                <p> <strong class="text-center"><span id="legendtwo"></span> Ontem: 188 </strong></p>\
                <div class="dropdown">\
                  <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdown" class="dropdown-content">\
                    <a style="cursor:pointer;" onclick="chartAtualHoje()">Apenas hoje</a>\
                    <a style="cursor:pointer;" onclick="chartAtualOntem()">Apenas ontem</a>\
                    <a style="cursor:pointer;">Mais opções de gráfico</a>\
                  </div>\
                </div>';
        
        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function chartAtualHoje() {
        var a = "img/chart3testhoje.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Fluxo de pessoas: </strong>\
                </p>\
                <span><strong class="text-center"><span id="legend"></span> Hoje Hoje: 256  </strong></span></p>\
                <div class="dropdown">\
                  <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdown" class="dropdown-content">\
                    <a style="cursor:pointer;" onclick="chartAtualOntem()">Apenas ontem</a>\
                    <a style="cursor:pointer;" onclick="changeChartTwo()">Hoje e ontem</a>\
                    <a style="cursor:pointer;">Mais opções de gráfico</a>\
                  </div>\
                </div>';

        document.getElementById("mychart").setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function chartAtualOntem() {
        var a = "img/chart3testontem.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Fluxo de pessoas: </strong>\
                </p>\
                <span><strong class="text-center"><span id="legendtwo"></span> Ontem: 188  </strong></span></p>\
                <div class="dropdown">\
                  <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdown" class="dropdown-content">\
                    <a style="cursor:pointer;" onclick="chartAtualHoje()">Apenas Hoje</a>\
                    <a style="cursor:pointer;" onclick="changeChartTwo()">Hoje e ontem</a>\
                    <a style="cursor:pointer;">Mais opções de gráfico</a>\
                  </div>\
                </div>';

        document.getElementById("mychart").setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function changeChartThree() {
        var a = "img/chart3.png";
        var b = '<p id="estabelecimento" class="text-center">\
                  <strong>Fluxo de pessoas: <strong id="green"> +13%</strong></strong>\
                </p>\
                <span><strong class="text-center"><span id="legend"></span> Mês atual: 4.328  </strong></span></p>\
                <p> <strong class="text-center"><span id="legendtwo"></span> Mês anterior: 3.652 </strong></p>\
                <div class="dropdown">\
                  <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdown" class="dropdown-content">\
                    <a style="cursor:pointer;" onclick="chartTreeAtual()">Apenas o mês atual</a>\
                    <a style="cursor:pointer;" onclick="chartTreeAnterior()">Apenas o mês anterior</a>\
                    <a style="cursor:pointer;">Período personalizado</a>\
                  </div>\
                </div>';

        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function chartTreeAtual() {
        var a = "img/chart3atual.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Fluxo de pessoas: </strong>\
                </p>\
                <span><strong class="text-center"><span id="legend"></span> Mês atual: 4.328  </strong></span></p>\
                <div class="dropdown">\
                  <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdown" class="dropdown-content">\
                    <a style="cursor:pointer;" onclick="chartTreeAnterior()">Apenas o mês anterior</a>\
                    <a style="cursor:pointer;" onclick="changeChartThree()">Mês atual e anterior</a>\
                    <a style="cursor:pointer;">Mais opções de gráfico</a>\
                  </div>\
                </div>';
        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function chartTreeAnterior() {
        var a = "img/chart3anterior.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Fluxo de pessoas: </strong>\
                </p>\
                <span><strong class="text-center"><span id="legendtwo"></span> Mês anterior: 3.652  </strong></span></p>\
                <div class="dropdown">\
                  <i onclick="myFunction()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdown" class="dropdown-content">\
                    <a style="cursor:pointer;" onclick="chartTreeAtual()">Apenas o mês atual</a>\
                    <a style="cursor:pointer;" onclick="changeChartThree()">Mês atual e anterior</a>\
                    <a style="cursor:pointer;">Mais opções de gráfico</a>\
                  </div>\
                </div>';
        document.getElementById('mychart').setAttribute("src", a);
        document.getElementById('date').innerHTML = b;
      }

      function changeChartPieOne() {
        var a = "img/piechart1.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Detalhes sobre Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong></strong>\
                </p>\
                <span><strong class="text-center"> Mulheres: 145<strong id="woman"> 56%</strong>   </strong></span></p>\
                <p id="test"> <span><strong class="text-center"> Homens: 111<strong id="man"> 44%</strong>   </strong></span></p>\
                <div class="dropdown">\
                  <i onclick="myFunctionTwo()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownTwo" class="dropdown-content">\
                      <a style="cursor:pointer;">Comparar períodos</a>\
                      <a style="cursor:pointer;">Comparar gêneros com outros dados</a>\
                    </div>\
                  </div>';
        document.getElementById('mypiechart').setAttribute("src", a);
        document.getElementById('datetwo').innerHTML = b;
      }

      function changeChartPieTwo() {
        var a = "img/piechart2.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Detalhes sobre Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual  </strong></strong></strong>\
                </p>\
                <span><strong class="text-center"> Mulheres: 809<strong id="woman"> 61%</strong>   </strong></span></p>\
                <p id="test"><span><strong class="text-center"> Homens: 517<strong id="man"> 39%</strong>   </strong></span></p> \
                <div class="dropdown">\
                  <i onclick="myFunctionTwo()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdownTwo" class="dropdown-content">\
                    <a style="cursor:pointer;">Comparar períodos</a>\
                    <a style="cursor:pointer;">Comparar gêneros com outros dados</a>\
                  </div>\
                </div>';
        document.getElementById('mypiechart').setAttribute("src", a);
        document.getElementById('datetwo').innerHTML = b;
      }
      
      function changeChartPieThree() {
        var a = "img/piechart3.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Detalhes sobre Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês atual</strong></strong></strong>\
                </p>\
                <span><strong class="text-center"> Mulheres: 2.900<strong id="woman"> 67%</strong>   </strong></span></p>\
                <p id="test"> <span><strong class="text-center"> Homens: 1.428<strong id="man"> 33%</strong>   </strong></span></p>\
                <div class="dropdown">\
                  <i onclick="myFunctionTwo()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdownTwo" class="dropdown-content">\
                    <a href="#">Comparar períodos</a>\
                    <a href="#">Comparar gêneros com outros dados</a>\
                  </div>\
                </div>';
        document.getElementById('mypiechart').setAttribute("src", a);
        document.getElementById('datetwo').innerHTML = b;
      }

      function changeChartBarOne() {
        var a = "img/barchart1.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Detalhes sobre Emoções: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong> </strong>\
                </p>\
                <div class="row">\
                  <div class="col-md-6 col-xs-6 text-center">\
                    <div class="row">\
                      <div class="col-md-5 col-xs-6 text-center">\
                        <p>Alegria </p>\
                        <p>Surpresa</p>\
                        <p>Medo</p>\
                      </div>\
                      <div class="col-md-5 col-xs-6 text-center">\
                        <p><span id="emotion">65%</span id="emotion"></p>\
                        <p><span id="emotion">33%</span id="emotion"></p>\
                        <p><span id="emotion">15%</span id="emotion"></p>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="col-md-6 col-xs-6 text-center">\
                    <div class="row">\
                      <div class="col-md-5 col-xs-6 text-center">\
                        <p>Raiva </p>\
                        <p>Desgosto</p>\
                        <p>Tristeza</p>\
                      </div>\
                      <div class="col-md-5 col-xs-6 text-center">\
                        <p><span id="emotion">10%</span id="emotion"></p>\
                        <p><span id="emotion">18%</span id="emotion"></p>\
                        <p><span id="emotion">25%</span id="emotion"></p>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
              <div class="dropdown">\
                <i onclick="myFunctionThree()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                <div id="myDropdownThree" class="dropdown-content">\
                  <a href="#">Comparar períodos</a>\
                  <a href="#">Comparar gêneros com outros dados</a>\
                </div>\
              </div>';

        document.getElementById('mybarchart').setAttribute("src", a);
        document.getElementById('datethree').innerHTML = b;
      }

      function changeChartBarTwo() {
        var a = "img/barchart2.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
          <strong>Detalhes sobre Emoções: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual</strong> </strong></p>\
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
          <strong>Detalhes sobre Emoções: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês atual</strong> </strong></p>\
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
                  <div class="col-md-12 col-xs-12">\
                    <div class="row">\
                      <div class="col-md-12 col-xs-12 text-center">\
                        <p>Trafegaram em frente ao produto <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong>: <span>256 pessoas</span></p>\
                        <p><span>197 pessoas atraídas</span><span id="atraidos"> 77%</span></p>\
                        <p><span> 59 pessoas indiferentes</span><span id="natraidos"> 23%</span></p>\
                        <p>Nível de atratividade: <span id="nivel">Alto</span></p>\
                      </div>\
                    </div>\
                  </div>\
                </div>\
                <div class="dropdown">\
                  <i onclick="myFunctionFour()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdownFour" class="dropdown-content">\
                    <a style="cursor:pointer;"> Comparar atratividade entre produtos</a>\
                    <a style="cursor:pointer;" onclick="changeProduct()">Alterar produto em análise</a>\
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
                        <p>Trafegaram em frente ao produto <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> nessa semana </strong>: <span> 1.326 pessoas</span></p>\
                        <p><span>835 pessoas atraídas</span><span id="atraidos"> 63%</span></p>\
                        <p><span>491 pessoas indiferentes</span><span id="natraidos"> 37%</span></p>\
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

      function changeChartAttThree() { 
        var a = "img/barchartatratividade3.png";
        var b = '<div class="row">\
                  <div class="col-md-12">\
                    <div class="row">\
                      <div class="col-md-12 text-center">\
                        <p>Trafegaram em frente ao produto <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> nesse mês</strong>: <span>4.328 pessoas</span></p>\
                        <p><span>1.558 pessoas atraídas</span><span id="atraidos"> 39%</span></p>\
                        <p><span>2.770 pessoas indiferentes</span><span id="natraidos"> 61%</span></p>\
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
        confirm("Produto alterado com sucesso");
        var b = '<div class="row">\
                  <div class="col-md-12">\
                    <div class="row">\
                      <div class="col-md-12 text-center">\
                        <p>Trafegaram em frente ao produto: <span>0 pessoas</span></p>\
                        <p><span>0 pessoas atraídas</span><span id="atraidos"> 0%</span></p>\
                        <p><span>0 pessoas indiferentes</span><span id="natraidos"> 0%</span></p>\
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

      function changeChartDemoOne() {
        var a = "img/barchartdemografia1.png"
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Detalhes sobre Demografia: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> hoje</strong> </strong></p>\
                  <div class="row">\
                    <div class="col-md-6 col-xs-6 text-center">\
                      <div class="row">\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p>Criança </p>\
                          <p>Jovem</p>\
                        </div>\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p><span id="emotion">3%</span></p>\
                          <p><span id="emotion">37%</span></p>\
                        </div>\
                      </div>\
                    </div>\
                    <div class="col-md-6 col-xs-6 text-center">\
                      <div class="row">\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p>Adulto </p>\
                          <p>Idoso</p>\
                        </div>\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p><span id="emotion">51%</span></p>\
                          <p><span id="emotion">9%</span></p>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionFive()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownFive" class="dropdown-content">\
                      <a href="#">Comparar períodos</a>\
                      <a href="#">Comparar demografia com outros dados</a>\
                    </div>\
                  </div>';

        document.getElementById('datefive').innerHTML = b;  
        document.getElementById('mydemochart').setAttribute("src", a);      
      }

      function changeChartDemoTwo() {
        var a = "img/barchartdemografia2.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Detalhes sobre Demografia: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana atual</strong> </strong></p>\
                  <div class="row">\
                    <div class="col-md-6 col-xs-6 text-center">\
                      <div class="row">\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p>Criança </p>\
                          <p>Jovem</p>\
                        </div>\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p><span id="emotion">12%</span></p>\
                          <p><span id="emotion">48%</span></p>\
                        </div>\
                      </div>\
                    </div>\
                    <div class="col-md-6 col-xs-6 text-center">\
                      <div class="row">\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p>Adulto </p>\
                          <p>Idoso</p>\
                        </div>\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p><span id="emotion">31%</span></p>\
                          <p><span id="emotion">12%</span></p>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionFive()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownFive" class="dropdown-content">\
                      <a href="#">Comparar períodos</a>\
                      <a href="#">Comparar demografia com outros dados</a>\
                    </div>\
                  </div>';

        document.getElementById('datefive').innerHTML = b;
        document.getElementById('mydemochart').setAttribute("src", a);

      }

      function changeChartDemoThree() {
        var a = "img/barchartdemografia3.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <strong>Detalhes sobre Demografia: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês atual</strong> </strong></p>\
                  <div class="row">\
                    <div class="col-md-6 col-xs-6 text-center">\
                      <div class="row">\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p>Criança </p>\
                          <p>Jovem</p>\
                        </div>\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p><span id="emotion">6%</span></p>\
                          <p><span id="emotion">31%</span></p>\
                        </div>\
                      </div>\
                    </div>\
                    <div class="col-md-6 col-xs-6 text-center">\
                      <div class="row">\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p>Adulto </p>\
                          <p>Idoso</p>\
                        </div>\
                        <div class="col-md-5 col-xs-6 text-center">\
                          <p><span id="emotion">53%</span></p>\
                          <p><span id="emotion">10%</span></p>\
                        </div>\
                      </div>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionFive()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownFive" class="dropdown-content">\
                      <a href="#">Comparar períodos</a>\
                      <a href="#">Comparar demografia com outros dados</a>\
                    </div>\
                  </div>';
        document.getElementById('datefive').innerHTML = b;
        document.getElementById('mydemochart').setAttribute("src", a);
      }

      function changeGenChartHoje() {
        var a = "img/chartgenerohorariohoje.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <div class="row">\
                    <strong>Horários com maior concentração por Idade: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Hoje</strong> </strong></p>\
                    <div class="col-md-6 col-sm-6 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens </span></p>\
                      <p class="text-center">Das 20:00 às 20:59 <span id="emotion">50 homens</span></p>\
                      <p class="text-center">Das 21:00 às 21:59 <span id="emotion">61 homens</span></p>\
                    </div>\
                    <div class="col-md-6 col-sm-6 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                      <p class="text-center">Das 09:00 às 09:59 <span id="emotion">73 mulheres</span></p>\
                      <p class="text-center">Das 10:00 às 10:59 <span id="emotion">60 mulheres</span></p>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownSix" class="dropdown-content">\
                      <a href="#third-container" onclick="changeGenChartHojeMulheres()">Apenas Mulheres</a>\
                      <a href="#third-container" onclick="changeGenChartHojeHomens()">Apenas Homens</a>\
                    </div>\
                  </div>';

        document.getElementById('datesix').innerHTML = b;
        document.getElementById('mygenhorchart').setAttribute("src", a);
      }

      function changeGenChartHojeMulheres() {
        var a = "img/chartgenerohorariohojemulheres.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <div class="row">\
                    <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Hoje</strong> </strong></p>\
                    <div class="col-md-12 col-sm-12 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                      <p class="text-center">Das 09:00 às 09:59 <span id="emotion">73 mulheres</span></p>\
                      <p class="text-center">Das 10:00 às 10:59 <span id="emotion">60 mulheres</span></p>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownSix" class="dropdown-content">\
                      <a href="#third-container" onclick="changeGenChartHojeHomens()">Apenas Homens</a>\
                      <a href="#third-container" onclick="changeGenChartHoje()">Homens e Mulheres</a>\
                    </div>\
                  </div>';

        document.getElementById('mygenhorchart').setAttribute("src", a);
        document.getElementById('datesix').innerHTML = b;
      }

      function changeGenChartHojeHomens() {
        var a = "img/chartgenerohorariohojehomens.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <div class="row">\
                    <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Hoje</strong> </strong></p>\
                    <div class="col-md-12 col-sm-12 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens</p>\
                      <p class="text-center">Das 20:00 às 20:59 <span id="emotion">50 homens</span></p>\
                      <p class="text-center">Das 21:00 às 21:59 <span id="emotion">61 homens</span></p>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownSix" class="dropdown-content">\
                      <a href="#third-container" onclick="changeGenChartHojeMulheres()">Apenas Mulheres</a>\
                      <a href="#third-container" onclick="changeGenChartHoje()">Homens e Mulheres</a>\
                    </div>\
                  </div>';

        document.getElementById('mygenhorchart').setAttribute("src", a);
        document.getElementById('datesix').innerHTML = b;
      }

      function changeGenChartSemana() {
        var a = "img/chartgenhorsemana.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <div class="row">\
                    <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana Atual</strong> </strong></p>\
                    <div class="col-md-6 col-sm-6 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens </p>\
                      <p class="text-center">Das 19:00 às 19:59 <span id="emotion">273 homens</span></p>\
                      <p class="text-center">Das 20:00 às 20:59 <span id="emotion">244 homens</span></p>\
                    </div>\
                    <div class="col-md-6 col-sm-6 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                      <p class="text-center">Das 10:00 às 10:59 <span id="emotion">378 mulheres</span></p>\
                      <p class="text-center">Das 11:00 às 11:59 <span id="emotion">411 mulheres</span></p>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownSix" class="dropdown-content">\
                      <a href="#third-container" onclick="changeGenChartSemanaMulheres()">Apenas Mulheres</a>\
                      <a href="#third-container" onclick="changeGenChartSemanaHomens()">Apenas Homens</a>\
                    </div>\
                  </div>';

        document.getElementById('datesix').innerHTML = b;
        document.getElementById('mygenhorchart').setAttribute("src", a);
      }

      function changeGenChartSemanaMulheres() {
        var a = "img/chartgenerohorariosemanamulheres.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <div class="row">\
                    <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana Atual</strong> </strong></p>\
                    <div class="col-md-12 col-sm-12 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                      <p class="text-center">Das 10:00 às 10:59 <span id="emotion">378 mulheres</span></p>\
                      <p class="text-center">Das 11:00 às 11:59 <span id="emotion">411 mulheres</span></p>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownSix" class="dropdown-content">\
                      <a href="#third-container" onclick="changeGenChartSemanaHomens()">Apenas Homens</a>\
                      <a href="#third-container" onclick="changeGenChartSemana()">Homens e Mulheres</a>\
                    </div>\
                  </div>';

        document.getElementById('datesix').innerHTML = b;
        document.getElementById('mygenhorchart').setAttribute("src", a);

      }

      function changeGenChartSemanaHomens() {
        var a = "img/chartgenerohorariosemanahomens.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <div class="row">\
                    <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Semana Atual</strong> </strong></p>\
                    <div class="col-md-12 col-sm-12 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens</p>\
                      <p class="text-center">Das 19:00 às 19:59 <span id="emotion">273 homens</span></p>\
                      <p class="text-center">Das 20:00 às 20:59 <span id="emotion">244 homens</span></p>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownSix" class="dropdown-content">\
                      <a href="#third-container" onclick="changeGenChartSemanaMulheres()">Apenas Mulheres</a>\
                      <a href="#third-container" onclick="changeGenChartSemana()">Homens e Mulheres</a>\
                    </div>\
                  </div>';

        document.getElementById('datesix').innerHTML = b;
        document.getElementById('mygenhorchart').setAttribute("src", a);

      }

      function changeGenChartMes() {
        var a = "img/chartgenerohorariomes.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <div class="row">\
                    <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês Atual</strong> </strong></p>\
                    <div class="col-md-6 col-sm-6 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens </p>\
                      <p class="text-center">Das 19:00 às 19:59 <span id="emotion">788 homens</span></p>\
                      <p class="text-center">Das 20:00 às 20:59 <span id="emotion">536 homens</span></p>\
                    </div>\
                    <div class="col-md-6 col-sm-6 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                      <p class="text-center">Das 09:00 às 09:59 <span id="emotion">1.031 mulheres</span></p>\
                      <p class="text-center">Das 10:00 às 10:59 <span id="emotion">1.788 mulheres</span></p>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownSix" class="dropdown-content">\
                      <a href="#third-container" onclick="changeGenChartMesMulheres()">Apenas Mulheres</a>\
                      <a href="#third-container" onclick="changeGenChartMesHomens()">Apenas Homens</a>\
                    </div>\
                  </div>';

        document.getElementById('datesix').innerHTML = b;
        document.getElementById('mygenhorchart').setAttribute("src", a);
      }

      function changeGenChartMesMulheres() {
        var a = "img/chartgenerohorariomesmulheres.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <div class="row">\
                    <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês Atual</strong> </strong></p>\
                    <div class="col-md-12 col-sm-12 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhortwo"></span> Mulheres </p>\
                      <p class="text-center">Das 09:00 às 09:59 <span id="emotion">1.031 mulheres</span></p>\
                      <p class="text-center">Das 10:00 às 10:59 <span id="emotion">1.788 mulheres</span></p>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownSix" class="dropdown-content">\
                      <a href="#third-container" onclick="changeGenChartMesHomens()">Apenas Homens</a>\
                      <a href="#third-container" onclick="changeGenChartMes()">Homens e Mulheres</a>\
                    </div>\
                  </div>';

        document.getElementById('datesix').innerHTML = b;
        document.getElementById('mygenhorchart').setAttribute("src", a);
      }

      function changeGenChartMesHomens() {
        var a = "img/chartgenerohorariomeshomens.png";
        var b = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                  <div class="row">\
                    <strong>Horários com maior concentração por Gênero: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Mês Atual</strong> </strong></p>\
                    <div class="col-md-12 col-sm-12 text-center">\
                      <p style="margin-top:-3px !important;"><span id="legendgenhor"></span> Homens </p>\
                      <p class="text-center">Das 09:00 às 09:59 <span id="emotion">1.031 mulheres</span></p>\
                      <p class="text-center">Das 10:00 às 10:59 <span id="emotion">1.788 mulheres</span></p>\
                    </div>\
                  </div>\
                  <div class="dropdown">\
                    <i onclick="myFunctionSix()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                    <div id="myDropdownSix" class="dropdown-content">\
                      <a href="#third-container" onclick="changeGenChartMesMulheres()">Apenas Mulheres</a>\
                      <a href="#third-container" onclick="changeGenChartMes()">Homens e Mulheres</a>\
                    </div>\
                  </div>';

        document.getElementById('datesix').innerHTML = b;
        document.getElementById('mygenhorchart').setAttribute("src", a);
      }

      function changeAgeChartHoje() {
        var a = "img/chartidadehorariocriancahoje.png";
        var b = "img/chartidadehorarioadultohoje.png";
        var c = "img/chartidadehorariojovemhoje.png";
        var d = "img/chartidadehorarioidosohoje.png";
        var e = '<p id="estabelecimento" class="text-center" style="margin: 0 auto 15px 0 !important;">\
                <strong>Horários com maior concentração por Idade: <strong style="border-bottom: 2px solid white; padding-bottom: 1px; font-size:18px;"> Hoje</strong> </strong></p>\
                <div class="row">\
                  <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
                    <p style="margin-top:-1px !important;"><span id="legendcriancas"></span> Crianças</p>\
                    <p class="text-center">Das 09:00 às 09:59 <span id="emotion">17</span></p>\
                    <p class="text-center">Das 20:00 às 20:59 <span id="emotion">13</span></p>\
                  </div>\
                  <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
                    <p style="margin-top:-1px !important;"><span id="legendjovens"></span> Jovens </p>\
                    <p class="text-center">Das 09:00 às 09:59 <span id="emotion">1.031</span></p>\
                    <p class="text-center">Das 10:00 às 10:59 <span id="emotion">1.788</span></p>\
                  </div>\
                </div>\
                <div class="row">\
                  <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
                    <p><span id="legendadultos"></span> Adultos </p>\
                    <p class="text-center">Das 19:00 às 19:59 <span id="emotion">788</span></p>\
                    <p class="text-center">Das 20:00 às 20:59 <span id="emotion">536</span></p>\
                  </div>\
                  <div class="col-md-6 col-sm-6 col-xs-6 text-center">\
                    <p><span id="legendidosos"></span> Idosos</p>\
                    <p class="text-center">Das 09:00 às 09:59 <span id="emotion">1.031</span></p>\
                    <p class="text-center">Das 10:00 às 10:59 <span id="emotion">1.788</span></p>\
                  </div>\
                </div>\
                <div class="dropdown">\
                  <i onclick="myFunctionSeven()" class="dropbtn fa fa-cog" aria-hidden="true"></i>\
                  <div id="myDropdownSeven" class="dropdown-content">\
                    <a href="#third-container" onclick="changeGenChartMesMulheres()">X</a>\
                    <a href="#third-container" onclick="changeGenChartMesHomens()">X</a>\
                  </div>\
                </div>';

        document.getElementById("mydemochartone").setAttribute("src", a);
        document.getElementById("mydemocharttwo").setAttribute("src", b);
        document.getElementById("mydemochartthree").setAttribute("src", c);
        document.getElementById("mydemochartfour").setAttribute("src", d);
        document.getElementById("dateseven").innerHTML = e;
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
      function myFunctionFive() {
          document.getElementById("myDropdownFive").classList.toggle("show");
      }
      function myFunctionSix() {
          document.getElementById("myDropdownSix").classList.toggle("show");
      }
      function myFunctionSeven() {
          document.getElementById("myDropdownSeven").classList.toggle("show");
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