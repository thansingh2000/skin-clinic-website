	
	var MainTreat=document.querySelector(".MainTreat .row");
	
	var imgName=["AcneTreatment.jpg",
		"Hyperpigmentation.jpg",
		"HairRegrowthTherapy.jpg",
		"stretch-marks-on-tummy.jpg",
		"laser-hair-removal-500x500.jpg",
		"rf-face-lifting-treatment-500x500.jpg",
		"ThinkstockPhotos-187923649.jpg",
		"botox-treatment-main.jpg",
		"botox-injection-botox-vs-fillers.jpg",
		"chemical-peel-treatment-1.jpg",
		"img.jpg",
		"LAser-toning-1-894x1024.jpg",
		"medi-facial.jpeg",
		"revolutionary-treatment-of-rejuvenation-with-blood-royalty-free-image-1001618648-1536943732.jpg",
		"1852-Remove_Moles-732x549-thumbnail-1-732x549.jpg",
		"ear-lobe-repair-treatment-service-500x500.png",
		"eear.webp",
		"semi-permanent-makeup-procedures-fashionisers-main-image-1160x720.jpg",
		"ScalpSMP-1.png",
		"lash-lift-stylepoint-2-300x300.jpg",
		"Screen-Shot-2021-09-15-at-12.56.06-PM.png"
		
		];
	var altName=["Acne Treatment",
		"Treatment for Hyperpigmentation",
		"Hair Regrowth Therapy",
		"Scar and Stretch Mark Reduction",
		"Laser Hair Reduction",
		"Face Lift",
		"Skin Rejuvenation",
		"Botox",
		"Fillers",
		"Peels",
		"Platelet Rich Plasma Therapy",
		"Skin Brightening",
		"Medi Facials",
		"Vampire Facial",
		"Mole | Skin Tag | Cyst Removal",
		"Ear Lobe Repair",
		"Ear Piercing",
		"Semi Permanent Makeup",
		"Scalp Micro-pigmentation",
		"Lash Lift",
		"Lash Extension"
		
		];
	var Tname=["Acne Treatment",
		"Hyperpigmentation",
		"Hair Regrowth Therapy",
		"Scar and Stretch Mark Reduction",
		"Laser Hair Reduction",
		"Face Lift",
		"Skin Rejuvenation",
		"Botox",
		"Fillers",
		"Peels",
		"Platelet Rich Plasma Therapy",
		"Skin Brightening",
		"Medi Facials",
		"Vampire Facial",
		"Mole | Skin Tag | Cyst Removal",
		"Ear Lobe Repair",
		"Ear Piercing",
		"Semi Permanent Makeup",
		"Scalp Micro-pigmentation",
		"Lash Lift",
		"Lash Extension"
		];
	var Tlink=["contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		"contact.html",
		];
		/*
		var Tlink=["Acne_Treatment.html",
		"Hyperpigmentation.html",
		"Hair_Regrowth_Therapy.html",
		"Scar_and_Stretch_Mark_Reduction.html",
		"Laser_Hair_Reduction.html",
		"Face_Lift.html",
		"Skin_Rejuvenation.html",
		"Botox.html",
		"Fillers.html",
		"Peels.html",
		"Platelet_Rich_Plasma_Therapy.html",
		"Skin_Brightening.html",
		"Medi_Facials.html",
		"Vampire_Facial.html",
		"Mole_Skin_Tag_Cyst_Removal.html",
		"Ear_Lobe_Repair.html",
		"Ear_Piercing.html",
		"Semi_Permanent_Makeup.html",
		"Lash_Lift.html",
		"Lash_Extension.html"
		];
	*/
	
	for(var i=0; i<imgName.length; i++){
		MainTreat.innerHTML+=`
			<div class="col-md-4">
				<div class="card m-3 newColor position-relative">
					<div class="imageBox">
						<figure>
							<img src="img/${imgName[i]}" alt="${altName[i]}">
						</figure>
					</div>
					<div class="bgLayer">
						<h2>${Tname[i]}</h2>
						<a class="btnDsign" href="${Tlink[i]}">Information</a>
					</div>
				</div>
			</div>
		`;
	}
	
	