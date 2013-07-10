/*
	Symbol de musique 
	
	Author: Eudric Omega-Samson Honvo


*/


function Symbol(canvas)
{
	try
	{
		this.canevas = canvas;
		this.context = this.canevas.getContext("2d");
	}
	catch(err)
	{
		alert("Bad Init : "+ err.message);
		return ;
	}
		
		
	this.version = "0.2";
	 	
	this.x = 0;
	
	this.y = 0;
	
	this.setCanevas= function (){
		
		
	
	};
	
	
	this.clefSol = function (x,y){
		r = 10;
		//var c=document.getElementById('myCanvas');
		//
		this.context.lineWidth = 3;



		this.context.beginPath();

		this.context.moveTo(x+(r/2),y);
		this.context.arcTo(x+(r/2),y-r,x+r,y-r,r);

		this.context.moveTo(x+r,y-r);
		this.context.arcTo(x+(2*r),y-r,x+(2*r),y,r);
		this.context.arcTo(x+(2*r),y+r,x+r,y+r,r);
		this.context.arcTo(x,y+r,x,y,r);
		this.context.moveTo(x,y);
		this.context.lineTo(x+(3*r/2),y-(3*r));

		this.context.moveTo(x+r,y-(4*r));
		this.context.lineTo(x+r,y+(3*r));

		this.context.moveTo(x+r,y-(4*r));

		this.context.arcTo(x+(3*r/2),y-(3*r),x+(3*r/2),(y-(3*r))+7,r);




		this.context.lineWidth = 2;
		this.context.stroke();

		this.context.beginPath();

		this.context.arc(x+r-2,y+(3*r),2,0,2*Math.PI);

		this.context.fill();

		this.context.beginPath();

		this.context.arc(x+(r/2),y,2,0,2*Math.PI);

		this.context.fill();


	};
	
	
	this.portee = function(start,nbit) {
      
		this.context.lineWidth=0.5;

		k = 0;

		var l = 0;

		for(j=0;j<nbit;j++)
		{
			if(start + 75 < this.canevas.height)
			{
				//var positionPorteeSimple[k] = start;
				k++;	
				var thisPorte = new Array();
				for(i=0; i<50; i=i+10)
				{
					this.context.lineWidth= 0.5;
					this.context.moveTo(0,(start+i));
					this.context.lineTo(this.canevas.width,(start+i));
					this.context.stroke();
					if(i == 30)
					{
						this.clefSol(15,(start+i))
			
					}
					thisPorte[l] = start+i;
					l++;
				}
				start = start+100;
	
			}
			//allPorte[j] = thisPorte;
			i = 0;
			l = 0;
		}
       
       
       
       
    };
    
    
    
    


	this.porteeDouble =  function (start,nbit)
	{
		//
		//
		this.context.lineWidth=0.5;
	
	
		for(j=0;j<nbit;j++)
		{
			if( start +140 < this.canevas.height)
			{
				for(i=0; i<50; i=i+10)
				{
					this.context.lineWidth= 0.5;
					this.context.moveTo(0,(start+i));
					this.context.lineTo(this.canevas.width,(start+i));
					this.context.stroke();
					if(i == 30)
					{
						this.clefSol(15,(start+i))
					
					}
				}
				intm = start +100;
			
				for(i=0; i<50; i=i+10)
				{
					this.context.lineWidth= 0.5;
					this.context.moveTo(0,(intm +i));
					this.context.lineTo(this.canevas.width,(intm+i));
					this.context.stroke();
					if(i == 10)
					{
						this.clefFa(15,(intm +i))
					
					}
				}
			
				this.context.lineWidth= 0.5;
				this.context.moveTo(1,start);
				this.context.lineTo(1,(start+140));
				this.context.stroke();
				start = start+200;
				i=0;
			}else
			{
				this.context.moveTo(0, 0);
				this.context.lineTo(0,(this.canevas.height-10));
				continue;
		
			}
		}
	
	
	};


	this.setAuthor =  function (a)
	{
		
		
	
		if(a.length >0)
		{
			this.context.font="15px Arial";
			txt = a;
		
		
			//XML
			xmlDothis.canevas.getElementsByTagName("author")[0].childNodes[0].nodeValue = txt;
		
		
			//randValue = document.getElementById('titre').value.length *1;
			if(this.context.measureText(txt).width < this.canevas.width)
			{
				this.context.fillText(txt,(this.canevas.width- this.context.measureText(txt).width - 40),60);	
			}
			else
			{
				if(this.context.measureText(txt).width == this.canevas.width)
				{
					this.context.fillText(txt,0,60);	
			
				}
				else
				{
					final = txt.substr(0,txt.length/2);
					this.context.fillText(final,(this.canevas.width- this.context.measureText(txt).width - 40),60);	
				
			
				}
			
			}
	
		}



	}

	this.setPageNumber = function (a)
	{
		//
		//
	
		if(a.toString().length >0)
		{
			this.context.font="15px Arial";
			txt = a.toString();
		
			//randValue = document.getElementById('titre').value.length *1;
			if(this.context.measureText(txt).width < this.canevas.width)
			{
				this.context.fillText(txt,((this.canevas.width- this.context.measureText(txt).width)/2),890);	
			}
			else
			{
				if(this.context.measureText(txt).width == this.canevas.width)
				{
					this.context.fillText(txt,0,890);	
			
				}
				else
				{
					final = txt.substr(0,txt.length/2);
					this.context.fillText(final,((this.canevas.width- this.context.measureText(txt).width)/2),890);	
				
			
				}
			
			}
	
		}



	};


	this.setSignature = function (a)
	{
		
		
	
		if(a.length >0)
		{
			this.context.font="15px Arial";
			txt = a.toString();
		
			//randValue = document.getElementById('titre').value.length *1;
			if(this.context.measureText(txt).width < this.canevas.width)
			{
				this.context.fillText(txt,40,890);	
			}
			else
			{
				if(this.context.measureText(txt).width == this.canevas.width)
				{
					this.context.fillText(txt,0,890);	
			
				}
				else
				{
					final = txt.substr(0,txt.length/2);
					this.context.fillText(final,40,890);	
				
			
				}
			
			}
	
		}



	};


	this.setTempo = function (a)
	{
		
		
	
		xmlDothis.canevas.getElementsByTagName("tempo")[0].childNodes[0].nodeValue =  a;
	
		if(a.length > 0)
		{
			this.context.font="15px Arial";
			if(isNaN(a[0]) == false)
			{
				var n = a.split(",");
			
				if(n.length >1)
				{
					switch(n[0])
					{
					case "1":
						this.ronde(40,60);
						txt = "= " + n[1]; 
						this.context.fillText(txt,50,65);
						break;
				
					case "2":
						this.blanche(40,60);
						txt = "= " + n[1]; 
						this.context.fillText(txt,50,65);
					
						break;
				
					case "3":
						this.noire(40,60);
						txt = "= " + n[1]; 
						this.context.fillText(txt,50,65);
						break;
				
					case "4":
						this.croche(40,60);
						txt = "= " + n[1]; 
						this.context.fillText(txt,50,65);
					
						break;
					
					case "5":
						this.doubleCroche(40,60);
						txt = "= " + n[1]; 
						this.context.fillText(txt,50,65);

					
						break;
					case "6":
						this.tripleCroche(40,60);
						txt = "= " + n[1]; 
						this.context.fillText(txt,50,65);


					
						break;
				
					case "6":
					
						this.quadrupleCroche(40,60);
						txt = "= " + n[1]; 
						this.context.fillText(txt,50,65);

					
						break;
					}
				}
			}
			else
			{
			
				txt = a;
		
				//randValue = document.getElementById('titre').value.length *1;
				if(this.context.measureText(txt).width < this.canevas.width)
				{
					this.context.fillText(txt,40,60);	
				}
				else
				{
			
					final = txt.substr(0,txt.length/2);
					this.context.fillText(final, 40,60);	
				
			
			
				}
	
			}
		}
	};

	this.setTitle = function (a)
	{
		
		
	
		xmlDothis.canevas.getElementsByTagName("title")[0].childNodes[0].nodeValue = a;
	
		if(a.length >0)
		{
			this.context.font="30px Arial";
			txt = a;
		
			//randValue = document.getElementById('titre').value.length *1;
			if(this.context.measureText(txt).width < this.canevas.width)
			{
				this.context.fillText(txt,(((this.canevas.width- this.context.measureText(txt).width)/100) *40),40);	
			}
			else
			{
				if(this.context.measureText(txt).width == this.canevas.width)
				{
					this.context.fillText(txt,0,40);	
			
				}
				else
				{
					final = txt.substr(0,txt.length/2);
					this.context.fillText(final,(((this.canevas.width- this.context.measureText(final).width)/100) *40),40);	
				
			
				}
			
			}
	
		}



	};



	this.setLine = function (a)
	{
		
		
	
		if(document.getElementById('titre').value.length >0)
		{
			this.context.font="30px Arial";
			txt = document.getElementById('titre').value;
		
			xmlDothis.canevas.getElementsByTagName("title")[0].childNodes[0].nodeValue = txt;
		
			//randValue = document.getElementById('titre').value.length *1;
			if(this.context.measureText(txt).width < this.canevas.width)
			{
				this.context.fillText(txt,(((this.canevas.width- this.context.measureText(txt).width)/100) *40),40);	
			}
			else
			{
				if(this.context.measureText(txt).width == this.canevas.width)
				{
					this.context.fillText(txt,0,40);	
			
				}
				else
				{
					final = txt.substr(0,txt.length/2);
					this.context.fillText(final,(((this.canevas.width- this.context.measureText(final).width)/100) *40),40);	
				
			
				}
			
			}
	
		}
		else
		{
			xmlDothis.canevas.getElementsByTagName("title")[0].childNodes[0].nodeValue = "";
	
		}
	
		if(a == 1)
		{
			max = (this.canevas.height -50) / 75 ;
			this.portee(100,max);
		}
	
		if(a == 2)
		{
			max = (this.canevas.height -50) / 70 ;
			porteeDouble(100,max);
		}
	
		if(a == 3)
		{
			max = (this.canevas.height -50) / 75 ;
			this.porteeSpecial(100,max,measure,gamme);
		}
	
	
		if(a == 4)
		{
			max = (this.canevas.height -50) / 75 ;
			this.porteeDoubleSpecial(100,max,measure,gamme);
		}
	
	
	
	
	
		//numero de page
		this.context.font="20px Arial";
		this.context.fillText(pageNumber,((this.canevas.width/100) *50),880);
	
	
		txt="Partitions";
	
	
	
		this.context.fillText(txt,50,880);	
	
	
		maxHeight = 1000;
		maxWidth = 900;
	
		imgData = this.context.getImageData(0,0,maxWidth,maxHeight);
		eventStack[0] = imgData;
		
	
	};


	this.porteeSpecial =  function (start,nbit,measure,gamme)
	{
		
		//alert(measure);
		
		this.context.lineWidth=0.5;
	
		k = 0;
	
	
		for(j=0;j<nbit;j++)
		{
			if(start + 75 < this.canevas.height)
			{
				positionPorteeSimple[k] = start;
				k++;			
				for(i=0; i<50; i=i+10)
				{
					this.context.lineWidth= 0.5;
					this.context.moveTo(0,(start+i));
					this.context.lineTo(this.canevas.width,(start+i));
					this.context.stroke();
				
					switch(gamme)
					{
					case "do":
						break;
					case "do#":
						if(i == 0)
						{
							this.diese(65,start+i);
						}
						if(i == 10)
						{
							this.diese(50,start+i);
						}
					
						if(i == 10)
						{
							this.diese(80,start+i+5);
						}

						if(i == 0)
						{
							this.diese(95,start+i-5);
						}
					
						if(i == 30)
						{
							this.diese(100,start+i-5);
						}
					
						break;
					case "re":
				
						if(i == 0)
						{
							this.diese(50,start+i);
						}
						
						if(i == 10)
						{
							this.diese(60,start+i+5);
						}

					
						break;
					case "re#":
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}

						if(i == 30)
						{
							this.bemol(70,start+i);
						}
					
					
						break;
					
					case "mi":
						if(i == 0)
						{
							this.diese(50,start+i);
						}
						if(i == 10)
						{
							this.diese(80,start+i);
						}
					
						if(i == 10)
						{
							this.diese(60,start+i+5);
						}

						if(i == 0)
						{
							this.diese(70,start+i-5);
						}
				
						break;
					case "fa":
						if(i == 20)
						{
							this.bemol(50,start+i);
						}
						break;
					case "fa#":
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}
					
						if(i == 10)
						{
							this.bemol(80,start+i+5);
						}

						if(i == 30)
						{
							this.bemol(70,start+i);
						}
					
						if(i == 30)
						{
							this.bemol(90,start+i+5);
						}
					
						break;
					case "sol":
						if(i == 0)
						{
							this.diese(50,start+i);
						}
						break;
					case "sol#":
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}
					
						if(i == 10)
						{
							this.bemol(80,start+i+5);
						}

						if(i == 30)
						{
							this.bemol(70,start+i);
						}
						break;
					
					case "la":
						if(i == 0)
						{
							this.diese(75,start+i-5);
						}
						if(i == 0)
						{
							this.diese(60,start+i);
						}

						if(i == 10)
						{
							this.diese(50,start+i+5);
						}
				
						break;
					case "la#":
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}
						break;
					case "si":
				
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}
					
						if(i == 10)
						{
							this.bemol(80,start+i+5);
						}

						if(i == 30)
						{
							this.bemol(70,start+i);
						}
					
						if(i == 30)
						{
							this.bemol(90,start+i+5);
						}
						break;
				
					}
				
					if(i == 30)
					{
						this.clefSol(15,(start+i))
					
					
					}
				
				
					if(i == 20)
					{
				
						if( gamme == "do")
						{
							this.mesure(50,(start+i),measure);
						}
					
						if(gamme == "fa" || gamme == "sol")
						{
							this.mesure(65,(start+i),measure);
						}
					
						if(gamme == "la#" || gamme == "re")
						{
							this.mesure(75,(start+i),measure);
						}	
					
						if(gamme == "la" || gamme == "re#")
						{
							this.mesure(85,(start+i),measure);
						}
					
						if(gamme == "sol#"  || gamme =="mi" )
						{
							this.mesure(100,(start+i),measure);
						}
						if(gamme == "si" || gamme == "do#" || gamme == "fa#")
						{		
							this.mesure(110,(start+i),measure);
						}
					
					
					}
				}
				start = start+100;
			}
			i=0;
		}

	};
	
	this.porteeDoubleSpecial = function (start,nbit,measure,gamme)
	{
		
		
		this.context.lineWidth=0.5;
	
	
		for(j=0;j<nbit;j++)
		{
			if( start +140 < this.canevas.height)
			{
				for(i=0; i<50; i=i+10)
				{
					this.context.lineWidth= 0.5;
					this.context.moveTo(0,(start+i));
					this.context.lineTo(this.canevas.width,(start+i));
					this.context.stroke();
					switch(gamme)
					{
					case "do":
						break;
					case "do#":
						if(i == 0)
						{
							this.diese(65,start+i);
						}
						if(i == 10)
						{
							this.diese(50,start+i);
						}
					
						if(i == 10)
						{
							this.diese(80,start+i+5);
						}

						if(i == 0)
						{
							this.diese(95,start+i-5);
						}
					
						if(i == 30)
						{
							this.diese(100,start+i-5);
						}
					
						break;
					case "re":
				
						if(i == 0)
						{
							this.diese(50,start+i);
						}
						
						if(i == 10)
						{
							this.diese(60,start+i+5);
						}

					
						break;
					case "re#":
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}

						if(i == 30)
						{
							this.bemol(70,start+i);
						}
					
					
						break;
					
					case "mi":
						if(i == 0)
						{
							this.diese(50,start+i);
						}
						if(i == 10)
						{
							this.diese(80,start+i);
						}
					
						if(i == 10)
						{
							this.diese(60,start+i+5);
						}

						if(i == 0)
						{
							this.diese(70,start+i-5);
						}
				
						break;
					case "fa":
						if(i == 20)
						{
							this.bemol(50,start+i);
						}
						break;
					case "fa#":
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}
					
						if(i == 10)
						{
							this.bemol(80,start+i+5);
						}

						if(i == 30)
						{
							this.bemol(70,start+i);
						}
					
						if(i == 30)
						{
							this.bemol(90,start+i+5);
						}
					
						break;
					case "sol":
						if(i == 0)
						{
							this.diese(50,start+i);
						}
						break;
					case "sol#":
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}
					
						if(i == 10)
						{
							this.bemol(80,start+i+5);
						}

						if(i == 30)
						{
							this.bemol(70,start+i);
						}
						break;
					
					case "la":
						if(i == 0)
						{
							this.diese(75,start+i-5);
						}
						if(i == 0)
						{
							this.diese(60,start+i);
						}

						if(i == 10)
						{
							this.diese(50,start+i+5);
						}
				
						break;
					case "la#":
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}
						break;
					case "si":
				
						if(i == 10)
						{
							this.bemol(60,start+i);
						}
						if(i == 20)
						{
							this.bemol(50,start+i+5);
						}
					
						if(i == 10)
						{
							this.bemol(80,start+i+5);
						}

						if(i == 30)
						{
							this.bemol(70,start+i);
						}
					
						if(i == 30)
						{
							this.bemol(90,start+i+5);
						}
						break;
				
					}
				
					if(i == 30)
					{
						this.clefSol(15,(start+i))
					
					
					}
				
				
					if(i == 20)
					{
				
						if( gamme == "do")
						{
							this.mesure(50,(start+i),measure);
						}
					
						if(gamme == "fa" || gamme == "sol")
						{
							this.mesure(65,(start+i),measure);
						}
					
						if(gamme == "la#" || gamme == "re")
						{
							this.mesure(75,(start+i),measure);
						}	
					
						if(gamme == "la" || gamme == "re#")
						{
							this.mesure(85,(start+i),measure);
						}
					
						if(gamme == "sol#"  || gamme =="mi" )
						{
							this.mesure(100,(start+i),measure);
						}
						if(gamme == "si" || gamme == "do#" || gamme == "fa#")
						{		
							this.mesure(110,(start+i),measure);
						}
					
					
					}
					
				
			
				}
				intm = start +100;
			
				for(i=0; i<50; i=i+10)
				{
					this.context.lineWidth= 0.5;
					this.context.moveTo(0,(intm +i));
					this.context.lineTo(this.canevas.width,(intm+i));
					this.context.stroke();
					if(i == 10)
					{
						this.clefFa(15,(intm +i))
					
					}
				

					switch(gamme)
					{
					case "do":
						break;
					case "do#":
						if(i == 0)
						{
							this.diese(95,intm+i);
						}
						if(i == 10)
						{
							this.diese(50,intm+i);
						}
					
						if(i == 20)
						{
							this.diese(80,intm+i);
						}

						if(i == 0)
						{
							this.diese(65,intm+i+5);
						}
					
						if(i == 30)
						{
							this.diese(100,intm+i-5);
						}
					
						break;
					case "re":
				
						if(i == 10)
						{
							this.diese(50,intm+i);
						}
						
						if(i == 30)
						{
							this.diese(60,intm+i-5);
						}

					
						break;
					case "re#":
						if(i == 0)
						{
							this.bemol(60,intm+i+5);
						}
						if(i == 20)
						{
							this.bemol(50,intm+i);
						}

						if(i == 0)
						{
							this.bemol(75,intm+i);
						}
					
					
						break;
					
					case "mi":
					
						if(i == 10)
						{
							this.diese(50,intm+i); //50
						}
					
						if(i == 20)
						{
							this.diese(95,intm+i);//80
						}

						if(i == 0)
						{
							this.diese(80,intm+i+5);//65
						}
					
						if(i == 30)
						{
							this.diese(65,intm+i-5);//95
						}
					
						break;
					case "fa":
						if(i == 30)
						{
							this.bemol(50,intm+i);
						}
						break;
					case "fa#":
						if(i == 10)
						{
							this.bemol(60,intm+i);
						}
						if(i == 20)
						{
							this.bemol(70,intm+i+5);
						}
					
						if(i == 0)
						{
							this.bemol(80,intm+i+5);
						}

						if(i == 20)
						{
							this.bemol(50,intm+i);
						}
					
						if(i == 30)
						{
							this.bemol(90,intm+i+5);
						}
					
						break;
					case "sol":
						if(i == 10)
						{
							this.diese(50,intm+i);
						}
						break;
					case "sol#":
					
						if(i == 20)
						{
							this.bemol(60,intm+i+5);
						}
					
						if(i == 0)
						{
							this.bemol(50,intm+i+5);
						}

						if(i == 20)
						{
							this.bemol(70,intm+i);
						}
					
						if(i == 30)
						{
							this.bemol(90,intm+i+5);
						}
						break;
					
					case "la":
						if(i == 10)
						{
							this.diese(65,intm+i);
						}
					
						if(i == 0)
						{
							this.diese(80,intm+i+5);
						}
					
						if(i == 30)
						{
							this.diese(50,intm+i-5);
						}
				
						break;
					case "la#":
					
						if(i == 20)
						{
							this.bemol(60,intm+i);
						}

						if(i == 30)
						{
							this.bemol(50,intm+i+5);
						}
						break;
					case "si":
				
						if(i == 10)
						{
							this.bemol(80,intm+i);
						}
						if(i == 20)
						{
							this.bemol(70,intm+i+5);
						}
					
						if(i == 0)
						{
							this.bemol(60,intm+i+5);
						}

						if(i == 20)
						{
							this.bemol(50,intm+i);
						}
					
						if(i == 30)
						{
							this.bemol(90,intm+i+5);
						}
						break;
				
					}
					
				
			
			
				
				
					/*if(i == 20)
					{
						mesure(50,(intm+i),measure);
					}*/
				
					if(i == 20)
					{
				
						if( gamme == "do")
						{
							this.mesure(50,(intm+i),measure);
						}
					
						if(gamme == "fa" || gamme == "sol")
						{
							this.mesure(65,(intm+i),measure);
						}
					
						if(gamme == "la#" || gamme == "re")
						{
							this.mesure(75,(intm+i),measure);
						}	
					
						if(gamme == "la" || gamme == "re#")
						{
							this.mesure(85,(intm+i),measure);
						}
					
						if(gamme == "sol#"  || gamme =="mi" )
						{
							this.mesure(105,(intm+i),measure);
						}
						if(gamme == "si" || gamme == "do#" || gamme == "fa#")
						{		
							this.mesure(110,(intm+i),measure);
						}
					
					
					}
				
				}
			
				this.context.lineWidth= 0.5;
				this.context.moveTo(1,start);
				this.context.lineTo(1,(start+140));
				this.context.stroke();
				start = start+200;
				i=0;
			}else
			{
				this.context.moveTo(0, 0);
				this.context.lineTo(0,(this.canevas.height-10));
				continue;
		
			}
		}
	
	};







	this.anObjet = function (x,y)
	{
		
		
	
	
		this.context.strokeStyle="red";
		this.context.rect(x,y,10,10); 
		this.context.stroke();
	
	};

	this.eraseObjetOnPath = function (x,y)
	{
		
		
	
		this.context.strokeStyle="white";
		this.context.rect(x,y,10,10); 
		this.context.stroke();
	
	};

	this.showObject = function (event)
	{
	
	
	
	
	};

	
	this.clefFa = function (x,y)
	{
		r = 10;
		var c=document.getElementById('myCanvas');
		
		this.context.lineWidth = 3;
		this.context.beginPath();
		this.context.moveTo(x,y);
		this.context.arcTo(x,y-r,x+r,y-r,r);
		this.context.arcTo(x+(2*r),y-r,x+(2*r),y,r);
	
		this.context.lineTo(x+((1)*r),y+(2*r));

		this.context.stroke();

		this.context.beginPath();
	
		this.context.arc(x+(2*r) +5,y-5,2,0,2*Math.PI);
	
		this.context.fill();


		this.context.lineWidth = 1;
	
		this.context.beginPath();
	
		this.context.arc(x+(2*r) +5,y+5,2,0,2*Math.PI);
	
		this.context.fill();
	
		this.context.beginPath();
	
		this.context.arc(x,y,2,0,2*Math.PI);
	
		this.context.fill();
	
	};

	this.mesure = function (x,y,type)
	{
		
		
	
	
		this.context.font="15px Arial";
	
		switch(type)
		{
		case "2":
			this.context.beginPath();
			this.context.moveTo(x,y);
			this.context.lineTo(x+15,y);
			this.context.stroke();
			this.context.fillText("2",x+2,y-5);
			this.context.fillText("4",x+2,y+15);
			break;
		
		case "3":
			this.context.beginPath();
			this.context.moveTo(x,y);
			this.context.lineTo(x+15,y);
			this.context.stroke();
			this.context.fillText("3",x+2,y-5);
			this.context.fillText("4",x+2,y+15);
			break;
		
		case "4":
			this.context.beginPath();
			this.context.moveTo(x,y);
			this.context.lineTo(x+15,y);
			this.context.stroke();
			this.context.fillText("4",x+2,y-5);
			this.context.fillText("4",x+2,y+15);
			break;
		
		case "6":
			this.context.beginPath();
			this.context.moveTo(x,y);
			this.context.lineTo(x+15,y);
			this.context.stroke();
			this.context.fillText("6",x+2,y-5);
			this.context.fillText("8",x+2,y+15);
			break;
		
		case "9":
			this.context.beginPath();
			this.context.moveTo(x,y);
			this.context.lineTo(x+15,y);
			this.context.stroke();
			this.context.fillText("9",x+2,y-5);
			this.context.fillText("8",x+2,y+15);
			break;
		
		case "12":
			this.context.beginPath();
			this.context.moveTo(x,y);
			this.context.lineTo(x+20,y);
			this.context.stroke();
			this.context.fillText("12",x+2,y-5);
			this.context.fillText(" 8",x+2,y+15);
			break;
	
		case "c":
			this.context.beginPath();
			this.context.font="30px Arial";
			this.context.fillText("C",x,y);
		
			break;
	
		}
	
	};

	this.ronde = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
		this.context.beginPath();
		this.context.arc(x,y,5,0,2*Math.PI);
	
		this.context.stroke();
	
	
	};

	this.blanche = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
	
		this.context.lineWidth = 1;
		this.context.beginPath();
		this.context.arc(x,y,5,0,2*Math.PI);
	
		this.context.stroke();
	
		this.context.beginPath();
		this.context.moveTo(x+5,y);
		this.context.lineTo(x+5,y-30);
	
		this.context.stroke();
	
	
	};

	this.noire = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
		this.context.lineWidth = 1;
	
		this.context.beginPath();
		this.context.moveTo(x+5,y);
		this.context.lineTo(x+5,y-30);
	
		this.context.stroke();
	
		this.context.beginPath();
		this.context.arc(x,y,5,0,2*Math.PI);
	
		this.context.fill();
	
	
	
	};

	this.croche = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
		this.context.lineWidth = 1;
		this.context.beginPath();
		this.context.arc(x,y,5,0,2*Math.PI);
	
		this.context.fill();
	
		this.context.beginPath();
		this.context.moveTo(x+5,y);
		this.context.lineTo(x+5,y-30);
		this.context.lineTo(x+7,y-27);
		this.context.lineTo(x+10,y-27);
		this.context.arcTo(x+15,y-25,x+15,y-20,5);
		
		this.context.stroke();
	
	};

	this.doubleCroche = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
		this.context.lineWidth = 1;
		this.context.beginPath();
		this.context.arc(x,y,5,0,2*Math.PI);
	
		this.context.fill();
	
		this.context.beginPath();
		this.context.moveTo(x+5,y);
		this.context.lineTo(x+5,y-30);
		this.context.lineTo(x+7,y-27);
		this.context.lineTo(x+10,y-27);
		this.context.arcTo(x+15,y-25,x+15,y-20,5);
		
		this.context.moveTo(x+5,y-25);
		this.context.lineTo(x+5,y-25);
		this.context.lineTo(x+7,y-22);
		this.context.lineTo(x+10,y-22);
		this.context.arcTo(x+15,y-20,x+15,y-15,5);
	
		this.context.stroke();
	
	};

	this.tripleCroche = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
	
		this.context.lineWidth = 1;
		this.context.beginPath();
		this.context.arc(x,y,5,0,2*Math.PI);
	
		this.context.fill();
	
		this.context.beginPath();
		this.context.moveTo(x+5,y);
		this.context.lineTo(x+5,y-30);
		this.context.lineTo(x+7,y-27);
		this.context.lineTo(x+10,y-27);
		this.context.arcTo(x+15,y-25,x+15,y-20,5);
		
		this.context.moveTo(x+5,y-25);
		this.context.lineTo(x+5,y-25);
		this.context.lineTo(x+7,y-22);
		this.context.lineTo(x+10,y-22);
		this.context.arcTo(x+15,y-20,x+15,y-15,5);

		this.context.moveTo(x+5,y-20);
		this.context.lineTo(x+5,y-20);
		this.context.lineTo(x+7,y-17);
		this.context.lineTo(x+10,y-17);
		this.context.arcTo(x+15,y-15,x+15,y-10,5);
	
		this.context.stroke();
	
	};

	this.quadrupleCroche = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
	
		this.context.lineWidth = 1;
	
		this.context.beginPath();
		this.context.arc(x,y,5,0,2*Math.PI);
	
		this.context.fill();
	
		this.context.beginPath();
		this.context.moveTo(x+5,y);
		this.context.lineTo(x+5,y-30);
		this.context.lineTo(x+7,y-27);
		this.context.lineTo(x+10,y-27);
		this.context.arcTo(x+15,y-25,x+15,y-20,5);
		
		this.context.moveTo(x+5,y-25);
		this.context.lineTo(x+5,y-25);
		this.context.lineTo(x+7,y-22);
		this.context.lineTo(x+10,y-22);
		this.context.arcTo(x+15,y-20,x+15,y-15,5);

		this.context.moveTo(x+5,y-20);
		this.context.lineTo(x+5,y-20);
		this.context.lineTo(x+7,y-17);
		this.context.lineTo(x+10,y-17);
		this.context.arcTo(x+15,y-15,x+15,y-10,5);
		
		this.context.moveTo(x+5,y-15);
		this.context.lineTo(x+5,y-15);
		this.context.lineTo(x+7,y-12);
		this.context.lineTo(x+10,y-12);
		this.context.arcTo(x+15,y-10,x+15,y-5,5);
		this.context.stroke();
	
	};

	this.separation = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
	
		this.context.lineWidth = 1;
		this.context.beginPath();
		this.context.moveTo(x,y-20);
		this.context.lineTo(x,y+20);
		this.context.stroke();imageSa
	
	};

	





	this.diese = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
	
		this.context.lineWidth = 2;
	
		this.context.beginPath();
		this.context.moveTo(x-7,y-5);
		this.context.lineTo(x+7,y-7);
	
		this.context.moveTo(x-7,y+5);
		this.context.lineTo(x+7,y+3);
	
		this.context.moveTo(x-2,y+10);
		this.context.lineTo(x-2,y-10);
	
		this.context.moveTo(x+2,y+10);
		this.context.lineTo(x+2,y-10);
	
	
	
		this.context.stroke();
	
	};

	this.bemol = function (x,y)
	{
		//var c=document.getElementById('myCanvas');
		
		//this.context.font="20px Arial";
		//this.context.fillText("b",x-5,y+5);
		
		this.context.lineWidth = 2;
		this.context.moveTo(x,y-25);
		this.context.lineTo(x,y);

		this.context.moveTo(x,y-15);
		this.context.quadraticCurveTo(x+15,y-15,x,y);

		this.context.stroke();
	};

	this.becarre = function (x,y)
	{
		var c=document.getElementById('myCanvas');
		
	
		this.context.lineWidth = 2;
	
		this.context.beginPath();
		this.context.moveTo(x-5,y-10);
		this.context.lineTo(x-5,y);
		this.context.moveTo(x+5,y-5);
		this.context.lineTo(x+5,y+5);
	
		this.context.moveTo(x-5,y);
		this.context.lineTo(x+5,y);
	
		this.context.moveTo(x-5,y-5);
		this.context.lineTo(x+5,y-5);
	
		this.context.stroke();
	
	};



	this.segno = function (x,y)
	{
		
		
	
		this.context.lineWidth=1;
		this.context.beginPath();
	
		this.context.moveTo((x-9),y+9);
		this.context.lineTo(x+9,y-9);
		this.context.closePath();
		this.context.stroke();
	
	
		this.context.lineWidth=3;
		this.context.beginPath();
	
		this.context.moveTo((x-5),y-5);
		this.context.lineTo(x+5,y+5);
	
		
		this.context.closePath();
		this.context.stroke();
	
	
		this.context.lineWidth=3;
		this.context.beginPath();
	
		this.context.arc(x,y-5,5,1*Math.PI,1.7*Math.PI);
		this.context.moveTo(x,y);
		this.context.arc(x,y+5,5,0*Math.PI,0.7*Math.PI);
	
		this.context.stroke();
	
	
		this.context.beginPath();
	
		this.context.arc(x+5,y-1,1,0*Math.PI,2*Math.PI);
		this.context.moveTo(x,y);
		this.context.arc(x-5,y+1,1,0*Math.PI,2*Math.PI);
	
		this.context.fill();
		
				
	
	};

	this.alCoda = function (x,y)
	{
		
		
	
		this.context.lineWidth=3;
		this.context.beginPath();
	
		this.context.arc(x,y,7,0*Math.PI,2*Math.PI);
		this.context.stroke();
	

		this.context.lineWidth=1;	
		this.context.beginPath();
		this.context.moveTo(x,y-12);
		this.context.lineTo(x,y+12);
	
		this.context.moveTo(x-12,y);
		this.context.lineTo(x+12,y);

		this.context.stroke();

	};

	this.alFine = function (x,y)
	{
		
		
	
		this.context.lineWidth=3;
		this.context.font="15px Arial";
		this.context.fillText("Fine",x,y);
	
	
	

	};

	this.writeText = function (x,y,textToWriteIn)
	{
		
		
	
		if(textToWriteIn.length > 0)
		{
		
			this.context.font="15px Arial";
			this.context.fillText(textToWriteIn,x,y);
	
		}

	};
	
	this.writeSpecialText = function (textToWriteIn,x,y)
	{
		
		
	
		if(textToWriteIn.length > 0)
		{
		
			this.context.font="15px Arial";
			this.context.fillText(textToWriteIn,x,y);
	
		}

	};

	this.theC = function (x,y)
	{
		
		
		this.context.lineWidth=3;
		this.context.beginPath();
	
		this.context.arc(x,y,10,0.3*Math.PI,1.65*Math.PI);
	
		this.context.stroke();

	};


	this.pointOrgue = function (x,y)
	{
		
		
		this.context.lineWidth=2;
		this.context.beginPath();
	
		this.context.arc(x,y,7,1*Math.PI,2*Math.PI);
	
		this.context.stroke();
	
		this.context.beginPath();
	
		this.context.arc(x,y,2,0*Math.PI,2*Math.PI);
	
		this.context.fill();
	};

	this.point = function (x,y)
	{
		
		
	
		this.context.beginPath();
	
		this.context.arc(x,y,2,0*Math.PI,2*Math.PI);
	
		this.context.fill();

	};


	this.addition = function (x,y)
	{
		
		
	
		this.context.lineWidth = 1;
		this.context.beginPath();
	
		this.context.arc(x,y+30,30,1.25*Math.PI,1.75*Math.PI);
	
		this.context.stroke();


	};

	this.addition2 = function (x,y)
	{
		
		
	
		this.context.lineWidth = 1;
		this.context.beginPath();
	
		this.context.arc(x,y-30,30,0.25*Math.PI,0.75*Math.PI);
	
		this.context.stroke();


	};


	this.demiPause = function (x,y)
	{
		
		
		this.context.lineWidth = 1;
	
		this.context.beginPath();
		this.context.moveTo(x-7,y);
		this.context.lineTo(x+7,y);
	
		this.context.stroke();
	
		this.context.fillRect(x-5,y-4,10,4);
	
		


	};


	this.pause = function (x,y)
	{	

		
		
		this.context.lineWidth = 1;
	
		this.context.beginPath();
		this.context.moveTo(x-7,y);
		this.context.lineTo(x+7,y);
	
		this.context.stroke();
	
		this.context.fillRect(x-5,y,10,4);
	
		


	};


	this.soupir = function (x,y)
	{
		
		

		this.context.lineWidth = 1;
	
		this.context.beginPath();
		this.context.moveTo(x-4,y-9);
		this.context.lineTo(x,y-4);
	
		this.context.stroke();
	
		this.context.lineWidth = 3;
	
		this.context.beginPath();
		this.context.moveTo(x,y-4);
		this.context.lineTo(x-4,y);
		this.context.stroke();

		this.context.lineWidth = 2;
	
		this.context.beginPath();
		this.context.moveTo(x-4,y);
		this.context.lineTo(x,y+6);
	
		this.context.stroke();

		this.context.lineWidth = 1;
	
		this.context.beginPath();
	
		this.context.arc(x-2,y+8,3,1.1*Math.PI,1.6*Math.PI);
	
		this.context.stroke();	




	};

	this.demiSoupir = function (x,y)
	{
		
		
	
		this.context.beginPath();
	
		this.context.arc(x,y,2,0*Math.PI,2*Math.PI);
	
		this.context.fill();
	
		this.context.beginPath();
		this.context.moveTo(x,y);
		this.context.lineTo(x+4,y-2);
		this.context.lineTo(x,y+10);
		this.context.stroke();
	
	
	

	};

	this.quartSoupir = function (x,y)
	{
		
		
	
		this.context.beginPath();
	
		this.context.arc(x,y-5,2,0*Math.PI,2*Math.PI);
		this.context.arc(x,y,2,0*Math.PI,2*Math.PI);
	
		this.context.fill();
	
		this.context.beginPath();
	
	
	
		this.context.moveTo(x,y);
		this.context.lineTo(x+4,y-2);
	
		this.context.moveTo(x,y-5);
		this.context.lineTo(x+6,y-7);
	
		this.context.lineTo(x,y+10);
		this.context.stroke();
	};


	this.huitiemeSoupir = function (x,y)
	{
	
		
		
		this.context.beginPath();
	
		this.context.arc(x,y-10,2,0*Math.PI,2*Math.PI);
		this.context.arc(x,y-5,2,0*Math.PI,2*Math.PI);
		this.context.arc(x,y,2,0*Math.PI,2*Math.PI);
	
		this.context.fill();
	
		this.context.beginPath();
	
	
	
		this.context.moveTo(x,y);
		this.context.lineTo(x+4,y-2);
	
		this.context.moveTo(x,y-5);
		this.context.lineTo(x+6,y-7);
	
		this.context.moveTo(x,y-10);
		this.context.lineTo(x+8,y-12);
	
		this.context.lineTo(x+2,y+10);
		this.context.stroke();
	};

	this.seiziemeSoupir = function (x,y)
	{
		
		
	
		this.context.beginPath();
	
		this.context.arc(x,y-10,2,0*Math.PI,2*Math.PI);
		this.context.arc(x,y-5,2,0*Math.PI,2*Math.PI);
		this.context.arc(x,y,2,0*Math.PI,2*Math.PI);
		this.context.arc(x,y+5,2,0*Math.PI,2*Math.PI);
	
	
		this.context.fill();
	
		this.context.beginPath();
	
		this.context.moveTo(x,y+5);
		this.context.lineTo(x+6,y+3);
	
	
		this.context.moveTo(x,y);
		this.context.lineTo(x+6,y-2);
	
		this.context.moveTo(x,y-5);
		this.context.lineTo(x+6,y-7);
	
		this.context.moveTo(x,y-10);
		this.context.lineTo(x+8,y-12);
	
		this.context.lineTo(x+4,y+12);
		this.context.stroke();

	};


	this.doubleBarre = function (x,y)
	{
		//
		//
	
		this.context.beginPath();
	
		this.context.arc(x-5,y-5,2,0*Math.PI,2*Math.PI);
		this.context.arc(x-5,y+5,2,0*Math.PI,2*Math.PI);
	
		this.context.fill();
	
		this.context.lineWidth = 1;
	
		this.context.beginPath();
	
		this.context.moveTo(x,y-25);
		this.context.lineTo(x,y+25);
		this.context.stroke();
	
		this.context.lineWidth = 4;
		this.context.beginPath();
	
		this.context.moveTo(x+6,y-25);
		this.context.lineTo(x+6,y+25);
		this.context.stroke();


	};

	this.invDoubleBarre = function (x,y)
	{

		
	
		this.context.beginPath();
	
		this.context.arc(x+5,y-5,2,0*Math.PI,2*Math.PI);
		this.context.arc(x+5,y+5,2,0*Math.PI,2*Math.PI);
	
		this.context.fill();
	
		this.context.lineWidth = 1;
	
		this.context.beginPath();
	
		this.context.moveTo(x,y-20);
		this.context.lineTo(x,y+20);
		this.context.stroke();
	
		this.context.lineWidth = 4;
		this.context.beginPath();
	
		this.context.moveTo(x-6,y-20);
		this.context.lineTo(x-6,y+20);
		this.context.stroke();


	};


	this.connectLine = function (start,starty,x,y){
		//
		//
	
		this.context.beginPath();
	
		this.context.moveTo(start,starty);
		this.context.lineTo(x,y);
		this.context.stroke();	


	};




}


/*Symbols.prototype.getInfo2 = function() {
    return this.color + ' ' + this.type + ' apple';
};*/
