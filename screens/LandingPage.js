import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "@ui-kitten/components";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const LandingPage = () => {
  return (
    <View style={styles.landingPage}>
      <View style={styles.topHeader}>
        <View style={styles.topContainer}>
          <View style={styles.logo}>
            <Image
              style={styles.houselineIcon}
              contentFit="cover"
              source={require("../assets/houseline.png")}
            />
            <View style={styles.name}>
              <Text style={styles.reis}>REIS</Text>
              <Text style={[styles.realState, styles.rent1Typo]}>
                Real State
              </Text>
            </View>
          </View>
          <View style={[styles.navigationRight, styles.size4FlexBox]}>
            <View style={styles.navigation}>
              <Text style={styles.home}>HOME</Text>
              <Text style={[styles.aboutUs, styles.aboutUsTypo]}>ABOUT US</Text>
              <Text style={[styles.aboutUs, styles.aboutUsTypo]}>
                OUR AGENTS
              </Text>
              <Text style={[styles.properties, styles.aboutUsTypo]}>
                PROPERTIES
              </Text>
              <Text style={[styles.aboutUs, styles.aboutUsTypo]}>GALLERY</Text>
              <Text style={[styles.aboutUs, styles.aboutUsTypo]}>BLOG</Text>
              <Text style={[styles.aboutUs, styles.aboutUsTypo]}>
                CONTACT US
              </Text>
              <Text style={[styles.aboutUs, styles.aboutUsTypo]}>SEARCH</Text>
            </View>
            <Image
              style={[styles.hamburgerIcon, styles.iconLayout3]}
              contentFit="cover"
              source={require("../assets/hamburger.png")}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        style={styles.heroSectionIcon}
        resizeMode="cover"
        source={require("../assets/herosection.png")}
      >
        <View style={styles.heroSectionContents}>
          <View style={styles.text}>
            <Text style={styles.findYourDream}>Find Your Dream Home</Text>
            <Text style={[styles.vestibulumAnteIpsum, styles.vestibulumTypo]}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </Text>
          </View>
          <View style={styles.rentsale}>
            <View style={styles.navigation}>
              <Button
                style={[styles.rent, styles.ctaSpaceBlock]}
                title="Rent"
                size="medium"
                status="primary"
                appearance="filled"
                color="#4a60a1"
                textStyle={styles.rentText}
              >
                Rent
              </Button>
              <Button
                style={[styles.sale, styles.saleSpaceBlock]}
                title="Sale"
                size="medium"
                status="primary"
                appearance="outline"
                color="#fff"
                textStyle={styles.saleText}
              >
                Sale
              </Button>
            </View>
            <View style={[styles.formwrapper, styles.formFieldsSpaceBlock]}>
              <View style={styles.formcontainer}>
                <View style={styles.locations}>
                  <Text style={[styles.locations1, styles.locations1Typo]}>
                    Locations
                  </Text>
                  <View style={styles.dropdownlink}>
                    <Text style={[styles.text1, styles.text1Clr]}>
                      Select your city
                    </Text>
                    <Image
                      style={[styles.vectorIcon, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                  </View>
                </View>
                <View style={styles.propertyType}>
                  <Text style={[styles.propertyType1, styles.weDoAFlexBox]}>
                    Property Type
                  </Text>
                  <View style={styles.dropdownlink1}>
                    <Text style={[styles.text1, styles.text1Clr]}>
                      Select property type
                    </Text>
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                  </View>
                </View>
                <View style={styles.rentRange}>
                  <Text style={[styles.propertyType1, styles.weDoAFlexBox]}>
                    Rent Range
                  </Text>
                  <View style={styles.dropdownlink1}>
                    <Text style={[styles.text1, styles.text1Clr]}>
                      Select rent range
                    </Text>
                    <Image
                      style={[styles.vectorIcon1, styles.vectorIconLayout]}
                      contentFit="cover"
                      source={require("../assets/vector.png")}
                    />
                  </View>
                </View>
                <View style={[styles.searchCta, styles.ctaSpaceBlock]}>
                  <Text style={[styles.rent1, styles.rent1Typo]}>Search</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.propertiesByAreaImagesSect}>
        <View style={styles.description}>
          <Text style={styles.propertiesByArea}>Properties by Area</Text>
          <Text style={[styles.vestibulumAnteIpsum1, styles.text1Clr]}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </Text>
        </View>
        <View style={[styles.cards, styles.cardsSpaceBlock]}>
          <View style={styles.cardwrapper}>
            <View style={styles.row1}>
              <LinearGradient
                style={styles.card1}
                locations={[0, 1]}
                colors={["rgba(59, 77, 129, 0.7)", "rgba(59, 77, 129, 0)"]}
              >
                <ImageBackground
                  style={styles.iconLayout2}
                  resizeMode="cover"
                  source={require("../assets/card1.png")}
                >
                  <View style={styles.text4}>
                    <Text style={[styles.centerville, styles.contactUs3Typo]}>
                      Centerville
                    </Text>
                    <Text style={styles.listings}>25 listings</Text>
                  </View>
                </ImageBackground>
              </LinearGradient>
              <LinearGradient
                style={styles.card2}
                locations={[0, 1]}
                colors={["rgba(59, 77, 129, 0.7)", "rgba(59, 77, 129, 0)"]}
              >
                <ImageBackground
                  style={styles.iconLayout2}
                  resizeMode="cover"
                  source={require("../assets/card2.png")}
                >
                  <View style={styles.text4}>
                    <Text style={[styles.centerville, styles.contactUs3Typo]}>
                      Centerville
                    </Text>
                    <Text style={styles.listings}>25 listings</Text>
                  </View>
                </ImageBackground>
              </LinearGradient>
              <LinearGradient
                style={styles.card2}
                locations={[0, 1]}
                colors={["rgba(59, 77, 129, 0.7)", "rgba(59, 77, 129, 0)"]}
              >
                <ImageBackground
                  style={styles.iconLayout2}
                  resizeMode="cover"
                  source={require("../assets/card3.png")}
                >
                  <View style={styles.text4}>
                    <Text style={[styles.centerville, styles.contactUs3Typo]}>
                      Centerville
                    </Text>
                    <Text style={styles.listings}>25 listings</Text>
                  </View>
                </ImageBackground>
              </LinearGradient>
            </View>
            <View style={styles.row2}>
              <LinearGradient
                style={styles.card1}
                locations={[0, 1]}
                colors={["rgba(59, 77, 129, 0.8)", "rgba(59, 77, 129, 0)"]}
              >
                <ImageBackground
                  style={[styles.icon3, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/card4.png")}
                >
                  <View style={styles.text4}>
                    <Text style={[styles.centerville, styles.contactUs3Typo]}>
                      Arlington
                    </Text>
                    <Text style={styles.listings}>25 listings</Text>
                  </View>
                </ImageBackground>
              </LinearGradient>
              <LinearGradient
                style={styles.card5}
                locations={[0, 1]}
                colors={["rgba(59, 77, 129, 0.7)", "rgba(59, 77, 129, 0)"]}
              >
                <ImageBackground
                  style={[styles.icon3, styles.iconLayout2]}
                  resizeMode="cover"
                  source={require("../assets/card5.png")}
                >
                  <View style={styles.text4}>
                    <Text style={[styles.centerville, styles.contactUs3Typo]}>
                      Centerville
                    </Text>
                    <Text style={styles.listings}>25 listings</Text>
                  </View>
                </ImageBackground>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.propertiesByAreaFeatureCar,
          styles.propertiesCardSpaceBlock,
        ]}
      >
        <View style={styles.areaContent}>
          <View style={styles.description}>
            <Text style={styles.propertiesByArea}>Properties by Area</Text>
            <Text style={[styles.vestibulumAnteIpsum1, styles.text1Clr]}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </Text>
          </View>
          <View style={[styles.propertiesRow, styles.cardsCardFlexBox]}>
            <View style={styles.sellYourHome}>
              <View>
                <Image
                  style={styles.icon5}
                  contentFit="cover"
                  source={require("../assets/icon.png")}
                />
                <View style={styles.description1}>
                  <Text style={[styles.sellYourHome1, styles.contactUs3Typo]}>
                    Sell your home
                  </Text>
                  <Text style={[styles.weDoA, styles.weDoAFlexBox]}>
                    We do a free evaluation to be sure you want to start
                    selling.
                  </Text>
                  <Text style={styles.readMore}>Read more</Text>
                </View>
              </View>
            </View>
            <View style={[styles.rentYourHome, styles.homeShadowBox]}>
              <View>
                <Image
                  style={styles.icon5}
                  contentFit="cover"
                  source={require("../assets/icon1.png")}
                />
                <View style={styles.description1}>
                  <Text style={[styles.sellYourHome1, styles.contactUs3Typo]}>
                    Rent your home
                  </Text>
                  <Text style={[styles.weDoA, styles.weDoAFlexBox]}>
                    We do a free evaluation to be sure you want to start
                    selling.
                  </Text>
                  <Text style={styles.readMore}>Read more</Text>
                </View>
              </View>
            </View>
            <View style={[styles.buyAHome, styles.homeShadowBox]}>
              <View>
                <Image
                  style={styles.icon5}
                  contentFit="cover"
                  source={require("../assets/icon2.png")}
                />
                <View style={styles.description1}>
                  <Text style={[styles.sellYourHome1, styles.contactUs3Typo]}>
                    Buy a home
                  </Text>
                  <Text style={[styles.weDoA, styles.weDoAFlexBox]}>
                    We do a free evaluation to be sure you want to start
                    selling.
                  </Text>
                  <Text style={styles.readMore}>Read more</Text>
                </View>
              </View>
            </View>
            <View style={[styles.freeMarketing, styles.homeShadowBox]}>
              <View>
                <Image
                  style={styles.icon5}
                  contentFit="cover"
                  source={require("../assets/icon3.png")}
                />
                <View style={styles.description1}>
                  <Text style={[styles.sellYourHome1, styles.contactUs3Typo]}>
                    Free marketing
                  </Text>
                  <Text style={[styles.weDoA, styles.weDoAFlexBox]}>
                    We do a free evaluation to be sure you want to start
                    selling.
                  </Text>
                  <Text style={styles.readMore}>Read more</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.latestPropertiesOfRentCard,
          styles.propertiesCardSpaceBlock,
        ]}
      >
        <View style={styles.text}>
          <View style={styles.text9}>
            <Text style={styles.propertiesByArea}>
              Latest Properties of Rent
            </Text>
            <Text style={[styles.vestibulumAnteIpsum1, styles.text1Clr]}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </Text>
          </View>
          <View style={[styles.cardsRow, styles.rowSpaceBlock]}>
            <View style={styles.cardLayout}>
              <Image
                style={styles.propertyImageIcon}
                contentFit="cover"
                source={require("../assets/property-image.png")}
              />
              <View style={[styles.propertyName, styles.containerFlexBox]}>
                <Text style={[styles.alliumPlaceOrlando, styles.rent1Typo]}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </Text>
              </View>
              <View style={[styles.propertyName, styles.containerFlexBox]}>
                <Text style={styles.text10}>$ 590,693</Text>
              </View>
              <View style={[styles.moreDetails, styles.containerFlexBox]}>
                <View style={styles.parking}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/car.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>4</Text>
                </View>
                <View style={styles.bathrooms}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/bathtub.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>4</Text>
                </View>
                <View style={styles.bathrooms}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/arrowsout.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>
                    2,096.00 ft
                  </Text>
                </View>
              </View>
              <View style={[styles.container, styles.containerFlexBox]}>
                <View style={styles.parking}>
                  <Image
                    style={styles.userChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-1.png")}
                  />
                  <Text style={[styles.jennyWilson, styles.rent1Typo]}>
                    Jenny Wilson
                  </Text>
                </View>
                <View style={styles.navigation}>
                  <Image
                    style={[styles.shareIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/share.png")}
                  />
                  <Image
                    style={[styles.favoriteIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/favorite.png")}
                  />
                  <Image
                    style={[styles.favoriteIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/add.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.card21, styles.cardLayout]}>
              <Image
                style={styles.propertyImageIcon}
                contentFit="cover"
                source={require("../assets/property-image1.png")}
              />
              <View style={[styles.propertyName, styles.containerFlexBox]}>
                <Text style={[styles.alliumPlaceOrlando, styles.rent1Typo]}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </Text>
              </View>
              <View style={[styles.propertyName, styles.containerFlexBox]}>
                <Text style={styles.text10}>$ 590,693</Text>
              </View>
              <View style={[styles.moreDetails, styles.containerFlexBox]}>
                <View style={styles.parking}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/car.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>4</Text>
                </View>
                <View style={styles.bathrooms}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/bathtub1.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>4</Text>
                </View>
                <View style={styles.bathrooms}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/arrowsout.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>
                    2,096.00 ft
                  </Text>
                </View>
              </View>
              <View style={[styles.container, styles.containerFlexBox]}>
                <View style={styles.parking}>
                  <Image
                    style={styles.userChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-1.png")}
                  />
                  <Text style={[styles.jennyWilson, styles.rent1Typo]}>
                    Jenny Wilson
                  </Text>
                </View>
                <View style={styles.navigation}>
                  <Image
                    style={[styles.shareIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/share.png")}
                  />
                  <Image
                    style={[styles.favoriteIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/favorite.png")}
                  />
                  <Image
                    style={[styles.favoriteIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/add1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.card21, styles.cardLayout]}>
              <Image
                style={styles.propertyImageIcon}
                contentFit="cover"
                source={require("../assets/property-image2.png")}
              />
              <View style={[styles.propertyName, styles.containerFlexBox]}>
                <Text style={[styles.alliumPlaceOrlando, styles.rent1Typo]}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </Text>
              </View>
              <View style={[styles.propertyName, styles.containerFlexBox]}>
                <Text style={styles.text10}>$ 590,693</Text>
              </View>
              <View style={[styles.moreDetails, styles.containerFlexBox]}>
                <View style={styles.parking}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/car.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>4</Text>
                </View>
                <View style={styles.bathrooms}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/bathtub.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>4</Text>
                </View>
                <View style={styles.bathrooms}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/arrowsout1.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>
                    2,096.00 ft
                  </Text>
                </View>
              </View>
              <View style={[styles.container, styles.containerFlexBox]}>
                <View style={styles.parking}>
                  <Image
                    style={styles.userChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-1.png")}
                  />
                  <Text style={[styles.jennyWilson, styles.rent1Typo]}>
                    Jenny Wilson
                  </Text>
                </View>
                <View style={styles.navigation}>
                  <Image
                    style={[styles.shareIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/share.png")}
                  />
                  <Image
                    style={[styles.favoriteIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/favorite.png")}
                  />
                  <Image
                    style={[styles.favoriteIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/add1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.card21, styles.cardLayout]}>
              <Image
                style={styles.propertyImageIcon}
                contentFit="cover"
                source={require("../assets/property-image3.png")}
              />
              <View style={[styles.propertyName, styles.containerFlexBox]}>
                <Text style={[styles.alliumPlaceOrlando, styles.rent1Typo]}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </Text>
              </View>
              <View style={[styles.propertyName, styles.containerFlexBox]}>
                <Text style={styles.text10}>$ 590,693</Text>
              </View>
              <View style={[styles.moreDetails, styles.containerFlexBox]}>
                <View style={styles.parking}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/car.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>4</Text>
                </View>
                <View style={styles.bathrooms}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/bathtub.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>4</Text>
                </View>
                <View style={styles.bathrooms}>
                  <Image
                    style={styles.carIcon}
                    contentFit="cover"
                    source={require("../assets/arrowsout1.png")}
                  />
                  <Text style={[styles.text11, styles.rent1Typo]}>
                    2,096.00 ft
                  </Text>
                </View>
              </View>
              <View style={[styles.container, styles.containerFlexBox]}>
                <View style={styles.parking}>
                  <Image
                    style={styles.userChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-1.png")}
                  />
                  <Text style={[styles.jennyWilson, styles.rent1Typo]}>
                    Jenny Wilson
                  </Text>
                </View>
                <View style={styles.navigation}>
                  <Image
                    style={[styles.shareIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/share.png")}
                  />
                  <Image
                    style={[styles.favoriteIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/favorite.png")}
                  />
                  <Image
                    style={[styles.favoriteIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/add1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.cta, styles.ctaSpaceBlock]}>
          <Text style={[styles.rent1, styles.rent1Typo]}>
            Load more listing
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.latestPropertiesOfRentCard1,
          styles.propertiesCardSpaceBlock,
        ]}
      >
        <View style={styles.text}>
          <View style={styles.text9}>
            <Text style={styles.propertiesByArea}>
              Latest Properties of Rent
            </Text>
            <Text style={[styles.vestibulumAnteIpsum1, styles.text1Clr]}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </Text>
          </View>
          <View style={[styles.cardRow, styles.rowSpaceBlock]}>
            <LinearGradient
              style={styles.card12}
              locations={[0, 1]}
              colors={["rgba(59, 77, 129, 0)", "rgba(59, 77, 129, 0.5)"]}
            >
              <ImageBackground
                style={styles.icon9}
                resizeMode="cover"
                source={require("../assets/card11.png")}
              >
                <View style={styles.details}>
                  <View style={styles.size4FlexBox}>
                    <Image
                      style={[styles.mappinIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/mappin.png")}
                    />
                    <Text style={[styles.washington, styles.rent1Typo]}>
                      Washington
                    </Text>
                  </View>
                  <View style={[styles.size4, styles.size4FlexBox]}>
                    <Image
                      style={[styles.mappinIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/arrowsout2.png")}
                    />
                    <Text style={[styles.washington, styles.rent1Typo]}>
                      12000
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </LinearGradient>
            <LinearGradient
              style={styles.card22}
              locations={[0, 1]}
              colors={["rgba(59, 77, 129, 0)", "rgba(59, 77, 129, 0.5)"]}
            >
              <ImageBackground
                style={styles.icon9}
                resizeMode="cover"
                source={require("../assets/card21.png")}
              >
                <View style={styles.details}>
                  <View style={styles.size4FlexBox}>
                    <Image
                      style={[styles.mappinIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/mappin.png")}
                    />
                    <Text style={[styles.washington, styles.rent1Typo]}>
                      Washington
                    </Text>
                  </View>
                  <View style={[styles.size4, styles.size4FlexBox]}>
                    <Image
                      style={[styles.mappinIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/arrowsout2.png")}
                    />
                    <Text style={[styles.washington, styles.rent1Typo]}>
                      12000
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </LinearGradient>
            <LinearGradient
              style={styles.card22}
              locations={[0, 1]}
              colors={["rgba(59, 77, 129, 0)", "rgba(59, 77, 129, 0.5)"]}
            >
              <ImageBackground
                style={styles.icon9}
                resizeMode="cover"
                source={require("../assets/card31.png")}
              >
                <View style={styles.details}>
                  <View style={styles.size4FlexBox}>
                    <Image
                      style={[styles.mappinIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/mappin.png")}
                    />
                    <Text style={[styles.washington, styles.rent1Typo]}>
                      Washington
                    </Text>
                  </View>
                  <View style={[styles.size4, styles.size4FlexBox]}>
                    <Image
                      style={[styles.mappinIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/arrowsout2.png")}
                    />
                    <Text style={[styles.washington, styles.rent1Typo]}>
                      12000
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </LinearGradient>
            <LinearGradient
              style={styles.card22}
              locations={[0, 1]}
              colors={["rgba(59, 77, 129, 0)", "rgba(59, 77, 129, 0.5)"]}
            >
              <ImageBackground
                style={styles.icon9}
                resizeMode="cover"
                source={require("../assets/card41.png")}
              >
                <View style={styles.details}>
                  <View style={styles.size4FlexBox}>
                    <Image
                      style={[styles.mappinIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/mappin.png")}
                    />
                    <Text style={[styles.washington, styles.rent1Typo]}>
                      Washington
                    </Text>
                  </View>
                  <View style={[styles.size4, styles.size4FlexBox]}>
                    <Image
                      style={[styles.mappinIcon, styles.iconLayout3]}
                      contentFit="cover"
                      source={require("../assets/arrowsout2.png")}
                    />
                    <Text style={[styles.washington, styles.rent1Typo]}>
                      12000
                    </Text>
                  </View>
                </View>
              </ImageBackground>
            </LinearGradient>
          </View>
        </View>
        <View style={[styles.cta, styles.ctaSpaceBlock]}>
          <Text style={[styles.rent1, styles.rent1Typo]}>
            Load more listing
          </Text>
        </View>
      </View>
      <View
        style={[styles.latestPropertiesOfRentCard2, styles.cardsCardFlexBox]}
      >
        <View style={[styles.contents7, styles.cardsSpaceBlock]}>
          <View style={styles.text9}>
            <Text style={styles.propertiesByArea}>Contact us</Text>
            <Text style={[styles.vestibulumAnteIpsum1, styles.text1Clr]}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </Text>
          </View>
          <View style={[styles.form, styles.rowSpaceBlock]}>
            <View style={styles.text}>
              <Text style={styles.enquiryForm}>Enquiry Form</Text>
              <Text style={styles.areYouLooking}>
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </Text>
            </View>
            <View style={[styles.formFields, styles.formFieldsSpaceBlock]}>
              <View style={styles.row1}>
                <View style={[styles.input, styles.inputBorder]}>
                  <Text style={styles.firstName}>First name</Text>
                </View>
                <View style={[styles.input1, styles.inputBorder]}>
                  <Text style={styles.firstName}>Last name</Text>
                </View>
              </View>
              <View
                style={[styles.destinationNameInput, styles.inputSpaceBlock]}
              >
                <Text style={styles.firstName}>Email id</Text>
              </View>
              <View style={[styles.input2, styles.inputSpaceBlock]}>
                <Text style={styles.firstName}>Comments or questions</Text>
              </View>
              <View style={[styles.formSubmitButton, styles.inputSpaceBlock]}>
                <Text style={styles.submit}>Submit</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footerSection}>
        <View style={styles.footer}>
          <View style={styles.contactUs2}>
            <View style={styles.logo}>
              <Image
                style={styles.houselineIcon}
                contentFit="cover"
                source={require("../assets/houseline1.png")}
              />
              <View style={styles.name}>
                <Text style={styles.reis}>REIS</Text>
                <Text style={[styles.realState, styles.rent1Typo]}>
                  Real State
                </Text>
              </View>
            </View>
            <View style={styles.contactDetails}>
              <Text style={[styles.contactUs3, styles.contactUs3Typo]}>
                Contact Us
              </Text>
              <Text style={[styles.call123, styles.call123Typo]}>
                Call : +123 400 123
              </Text>
              <Text style={[styles.praesentNullaMassa, styles.call123Typo]}>
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </Text>
              <Text style={[styles.emailExamplemailcom, styles.call123Typo]}>
                Email: example@mail.com
              </Text>
            </View>
            <View style={styles.socialMedia}>
              <View style={styles.socialMediaCard}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/social-media-logo.png")}
                />
              </View>
              <View style={styles.socialMediaCard}>
                <Image
                  style={[styles.socialMediaLogo1, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/social-media-logo1.png")}
                />
              </View>
              <View style={styles.socialMediaCard}>
                <Image
                  style={[styles.socialMediaLogo1, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/social-media-logo2.png")}
                />
              </View>
              <View style={styles.socialMediaCard}>
                <Image
                  style={[styles.socialMediaLogo1, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/social-media-logo3.png")}
                />
              </View>
              <View style={styles.socialMediaCard}>
                <Image
                  style={[styles.socialMediaLogo1, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/social-media-logo4.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.features}>
            <Text style={[styles.contactUs3, styles.contactUs3Typo]}>
              Features
            </Text>
            <View
              style={[
                styles.featuresSubCategories,
                styles.featuresSubCategoriesSpaceBlock,
              ]}
            >
              <Text style={styles.home1Typo}>Home</Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>
                Become a Host
              </Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>
                Pricing
              </Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>Blog</Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>
                Contact
              </Text>
            </View>
          </View>
          <View style={styles.features}>
            <Text style={[styles.contactUs3, styles.contactUs3Typo]}>
              Company
            </Text>
            <View
              style={[
                styles.featuresSubCategories,
                styles.featuresSubCategoriesSpaceBlock,
              ]}
            >
              <Text style={styles.home1Typo}>About Us</Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>Press</Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>
                Contact
              </Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>
                Careers
              </Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>Blog</Text>
            </View>
          </View>
          <View style={styles.termsAndPolicies}>
            <Text style={[styles.contactUs3, styles.contactUs3Typo]}>
              Team and policies
            </Text>
            <View
              style={[
                styles.termsAndPoliciesSubcategori,
                styles.featuresSubCategoriesSpaceBlock,
              ]}
            >
              <Text style={styles.home1Typo}>Terms of servies</Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>
                Privacy Policy
              </Text>
              <Text style={[styles.becomeAHost, styles.home1Typo]}>
                Security
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rentText: {
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  saleText: {
    fontWeight: "500",
    fontFamily: "Inter-Medium",
  },
  rent1Typo: {
    fontFamily: FontFamily.bodyRegular500,
    fontWeight: "500",
  },
  size4FlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  aboutUsTypo: {
    marginLeft: 30,
    color: Color.primary900,
    lineHeight: 22,
    fontSize: FontSize.bodySmall400_size,
    textAlign: "center",
  },
  iconLayout3: {
    width: 24,
    height: 24,
  },
  vestibulumTypo: {
    lineHeight: 28,
    fontSize: FontSize.bodyLarge400_size,
    marginTop: 24,
    textAlign: "center",
    alignSelf: "stretch",
  },
  ctaSpaceBlock: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
  },
  saleSpaceBlock: {
    marginLeft: 10,
    borderRadius: Border.br_9xs,
  },
  formFieldsSpaceBlock: {
    marginTop: 17,
    alignSelf: "stretch",
  },
  locations1Typo: {
    color: Color.primary700,
    textTransform: "capitalize",
    fontSize: FontSize.bodyRegular400_size,
    fontFamily: FontFamily.headingHeading1,
    fontWeight: "600",
    lineHeight: 24,
  },
  text1Clr: {
    color: Color.gray400,
    fontFamily: FontFamily.bodyLarge400,
  },
  vectorIconLayout: {
    height: 6,
    width: 10,
    overflow: "hidden",
  },
  weDoAFlexBox: {
    display: "flex",
    alignItems: "flex-end",
  },
  cardsSpaceBlock: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
  },
  contactUs3Typo: {
    lineHeight: 32,
    fontWeight: "600",
    fontSize: FontSize.headerHeading4_size,
  },
  iconLayout2: {
    backgroundColor: "transparent",
    height: "100%",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    flex: 1,
  },
  propertiesCardSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
  },
  cardsCardFlexBox: {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  homeShadowBox: {
    marginLeft: 86,
    maxWidth: 340,
    minWidth: 300,
    shadowOpacity: 1,
    elevation: 68,
    shadowRadius: 68,
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowColor: "rgba(59, 77, 129, 0.08)",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.grayWhite,
  },
  rowSpaceBlock: {
    marginTop: 40,
    alignSelf: "stretch",
  },
  containerFlexBox: {
    marginTop: 23,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  cardLayout: {
    maxWidth: 400,
    paddingVertical: Padding.p_mini,
    paddingHorizontal: Padding.p_smi,
    height: 467,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke,
    borderStyle: "solid",
    minWidth: 355,
    borderRadius: Border.br_3xs,
    flex: 1,
    backgroundColor: Color.grayWhite,
  },
  inputBorder: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  inputSpaceBlock: {
    marginTop: 10,
    borderRadius: Border.br_9xs,
  },
  call123Typo: {
    marginTop: 13,
    fontFamily: FontFamily.bodyRegular400,
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    lineHeight: 24,
  },
  featuresSubCategoriesSpaceBlock: {
    marginTop: 32,
    alignSelf: "stretch",
  },
  home1Typo: {
    fontFamily: FontFamily.bodyRegular400,
    color: Color.gray500,
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    lineHeight: 24,
  },
  houselineIcon: {
    width: 44,
    height: 44,
  },
  reis: {
    textAlign: "center",
    color: Color.primary500,
    fontFamily: FontFamily.headingHeading1,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.headerHeading4_size,
  },
  realState: {
    lineHeight: 16,
    fontWeight: "500",
    fontSize: FontSize.bodySmall400_size,
    textAlign: "center",
    color: Color.primary500,
  },
  name: {
    marginLeft: 8,
  },
  logo: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  home: {
    color: Color.primary900,
    lineHeight: 22,
    fontFamily: FontFamily.bodyLarge400,
    fontSize: FontSize.bodySmall400_size,
    textAlign: "center",
  },
  aboutUs: {
    fontFamily: FontFamily.bodyLarge400,
  },
  properties: {
    fontFamily: FontFamily.headingHeading1,
    fontWeight: "600",
  },
  navigation: {
    flexDirection: "row",
  },
  hamburgerIcon: {
    marginLeft: 36,
    height: 24,
  },
  navigationRight: {
    alignItems: "center",
  },
  topContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  topHeader: {
    height: 98,
    paddingHorizontal: 80,
    paddingVertical: Padding.p_3xl,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: Color.grayWhite,
  },
  findYourDream: {
    fontSize: FontSize.display_size,
    lineHeight: 72,
    color: Color.grayWhite,
    fontFamily: FontFamily.headerHeading4,
    textAlign: "center",
    fontWeight: "600",
    alignSelf: "stretch",
  },
  vestibulumAnteIpsum: {
    color: Color.primary50,
    marginTop: 24,
    fontFamily: FontFamily.bodyLarge400,
  },
  text: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  rent: {
    overflow: "hidden",
    borderRadius: Border.br_9xs,
  },
  sale: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    overflow: "hidden",
  },
  locations1: {
    textAlign: "center",
  },
  text1: {
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    lineHeight: 24,
  },
  vectorIcon: {
    marginLeft: 4,
  },
  dropdownlink: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  locations: {
    width: 137,
  },
  propertyType1: {
    width: 150,
    alignItems: "flex-end",
    textAlign: "left",
    color: Color.primary700,
    textTransform: "capitalize",
    fontSize: FontSize.bodyRegular400_size,
    fontFamily: FontFamily.headingHeading1,
    fontWeight: "600",
    lineHeight: 24,
  },
  vectorIcon1: {
    marginLeft: 5,
  },
  dropdownlink1: {
    marginTop: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  propertyType: {
    width: 177,
  },
  rentRange: {
    width: 155,
  },
  rent1: {
    fontSize: FontSize.bodyRegular400_size,
    color: Color.grayWhite,
    textAlign: "center",
    lineHeight: 24,
  },
  searchCta: {
    width: 102,
    backgroundColor: Color.primary500,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    alignItems: "center",
  },
  formcontainer: {
    paddingHorizontal: 62,
    paddingVertical: 32,
    maxWidth: 1400,
    borderRadius: Border.br_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: Color.grayWhite,
  },
  formwrapper: {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  rentsale: {
    marginTop: 62,
    alignSelf: "stretch",
    alignItems: "center",
  },
  heroSectionContents: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  heroSectionIcon: {
    paddingVertical: 120,
    paddingHorizontal: Padding.p_11xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  propertiesByArea: {
    fontSize: FontSize.headingHeading1_size,
    lineHeight: 48,
    color: Color.primary800,
    textAlign: "center",
    fontFamily: FontFamily.headingHeading1,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  vestibulumAnteIpsum1: {
    marginTop: 24,
    lineHeight: 28,
    fontSize: FontSize.bodyLarge400_size,
    textAlign: "center",
    alignSelf: "stretch",
  },
  description: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_11xl,
    alignSelf: "stretch",
    alignItems: "center",
  },
  centerville: {
    textAlign: "left",
    color: Color.grayWhite,
    fontFamily: FontFamily.headingHeading1,
  },
  listings: {
    marginTop: 11,
    fontSize: FontSize.bodyRegular400_size,
    color: Color.grayWhite,
    fontFamily: FontFamily.bodyLarge400,
    textAlign: "center",
    lineHeight: 24,
  },
  text4: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 0,
  },
  card1: {
    height: 241,
  },
  card2: {
    marginLeft: 26,
    height: 241,
  },
  row1: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon3: {
    padding: Padding.p_3xs,
  },
  card5: {
    marginLeft: 24,
    height: 241,
  },
  row2: {
    marginTop: 24,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  cardwrapper: {
    maxWidth: 1300,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  cards: {
    marginTop: 45,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  propertiesByAreaImagesSect: {
    paddingHorizontal: Padding.p_31xl,
    paddingVertical: 53,
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  icon5: {
    width: 78,
    height: 78,
    overflow: "hidden",
  },
  sellYourHome1: {
    color: Color.gray700,
    textAlign: "center",
    fontFamily: FontFamily.headingHeading1,
  },
  weDoA: {
    width: 268,
    alignItems: "flex-end",
    textAlign: "left",
    color: Color.gray400,
    fontFamily: FontFamily.bodyLarge400,
    fontSize: FontSize.bodyRegular400_size,
    marginTop: 24,
    lineHeight: 24,
  },
  readMore: {
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    marginTop: 24,
    fontFamily: FontFamily.bodyLarge400,
    color: Color.primary500,
    lineHeight: 24,
  },
  description1: {
    marginTop: 24,
  },
  sellYourHome: {
    maxWidth: 340,
    minWidth: 300,
    elevation: 68,
    shadowRadius: 68,
    shadowColor: "rgba(59, 77, 129, 0.08)",
    padding: Padding.p_3xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 24,
    },
    borderRadius: Border.br_9xs,
    backgroundColor: Color.grayWhite,
  },
  rentYourHome: {
    paddingHorizontal: Padding.p_base,
    width: 312,
    paddingVertical: Padding.p_3xl,
  },
  buyAHome: {
    padding: Padding.p_3xl,
    marginLeft: 86,
  },
  freeMarketing: {
    paddingHorizontal: 20,
    width: 312,
    paddingVertical: Padding.p_3xl,
  },
  propertiesRow: {
    marginTop: 54,
    alignSelf: "stretch",
    alignItems: "center",
  },
  areaContent: {
    paddingTop: 75,
    alignSelf: "stretch",
    alignItems: "center",
  },
  propertiesByAreaFeatureCar: {
    paddingVertical: 70,
    backgroundColor: Color.primary50,
    alignSelf: "stretch",
  },
  text9: {
    width: 688,
    alignItems: "center",
  },
  propertyImageIcon: {
    maxWidth: "100%",
    height: 200,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
  },
  alliumPlaceOrlando: {
    fontSize: FontSize.size_mini_5,
    lineHeight: 20,
    color: Color.gray700,
    textAlign: "left",
    flex: 1,
  },
  propertyName: {
    padding: Padding.p_3xs,
  },
  text10: {
    fontSize: FontSize.size_sm_6,
    lineHeight: 19,
    textAlign: "left",
    color: Color.primary500,
    fontFamily: FontFamily.headingHeading1,
    fontWeight: "600",
  },
  carIcon: {
    width: 17,
    height: 17,
  },
  text11: {
    fontSize: FontSize.size_2xs_8,
    marginLeft: 4.35,
    color: Color.gray500,
    textAlign: "left",
    lineHeight: 16,
    fontWeight: "500",
  },
  parking: {
    flexDirection: "row",
    alignItems: "center",
  },
  bathrooms: {
    marginLeft: 17,
    flexDirection: "row",
    alignItems: "center",
  },
  moreDetails: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
  },
  userChild: {
    width: 28,
    height: 28,
  },
  jennyWilson: {
    fontSize: FontSize.size_xs_6,
    lineHeight: 17,
    marginLeft: 5.81,
    color: Color.gray700,
    textAlign: "center",
  },
  shareIcon: {
    borderRadius: 1,
    height: 20,
    width: 20,
  },
  favoriteIcon: {
    marginLeft: 8.71,
    borderRadius: 1,
    height: 20,
    width: 20,
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  card21: {
    marginLeft: 32,
  },
  cardsRow: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  cta: {
    marginTop: 39,
    backgroundColor: Color.primary500,
    borderRadius: Border.br_9xs,
  },
  latestPropertiesOfRentCard: {
    width: 1920,
    paddingVertical: Padding.p_67xl,
  },
  mappinIcon: {
    height: 24,
  },
  washington: {
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    color: Color.grayWhite,
    lineHeight: 24,
    marginLeft: 8,
  },
  size4: {
    marginLeft: 32,
  },
  details: {
    alignItems: "flex-end",
    height: 24,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  icon9: {
    borderRadius: Border.br_7xs,
    padding: Padding.p_5xl,
    maxWidth: 370,
    minWidth: 355,
    backgroundColor: "transparent",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  card12: {
    height: 426,
  },
  card22: {
    marginLeft: 40,
    height: 426,
  },
  cardRow: {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  latestPropertiesOfRentCard1: {
    paddingVertical: Padding.p_67xl,
    alignSelf: "stretch",
  },
  enquiryForm: {
    lineHeight: 36,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: "#434343",
    textAlign: "left",
    fontSize: FontSize.headerHeading4_size,
    alignSelf: "stretch",
  },
  areYouLooking: {
    fontSize: 18,
    lineHeight: 30,
    color: "#576074",
    marginTop: 6,
    fontFamily: FontFamily.componentsInputText,
    textAlign: "left",
    alignSelf: "stretch",
  },
  firstName: {
    letterSpacing: 0,
    color: Color.colorDarkgray,
    fontFamily: FontFamily.componentsInputText,
    textAlign: "left",
    fontSize: FontSize.bodyRegular400_size,
    lineHeight: 24,
  },
  input: {
    borderRadius: Border.br_9xs,
    flex: 1,
  },
  input1: {
    marginLeft: 10,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    flex: 1,
  },
  destinationNameInput: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  input2: {
    height: 105,
    padding: Padding.p_xs,
    borderColor: Color.colorGray_100,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    alignSelf: "stretch",
  },
  submit: {
    width: 203,
    fontFamily: FontFamily.componentsInputText,
    fontSize: FontSize.bodyRegular400_size,
    color: Color.grayWhite,
    textAlign: "center",
  },
  formSubmitButton: {
    width: 222,
    height: 46,
    backgroundColor: Color.primary500,
    justifyContent: "center",
    alignItems: "center",
  },
  formFields: {
    alignItems: "center",
  },
  form: {
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowRadius: 24,
    elevation: 24,
    paddingVertical: 28,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 24,
    },
    marginTop: 40,
    paddingHorizontal: Padding.p_11xl,
    alignItems: "center",
    backgroundColor: Color.grayWhite,
  },
  contents7: {
    maxWidth: 900,
    alignItems: "center",
    flex: 1,
  },
  latestPropertiesOfRentCard2: {
    paddingHorizontal: 5,
    paddingVertical: Padding.p_67xl,
    backgroundColor: Color.primary50,
    alignSelf: "stretch",
  },
  contactUs3: {
    color: Color.grayBlack,
    textAlign: "left",
    fontFamily: FontFamily.headerHeading4,
  },
  call123: {
    color: Color.gray500,
  },
  praesentNullaMassa: {
    color: Color.gray500,
    width: 312,
    alignItems: "flex-end",
    display: "flex",
  },
  emailExamplemailcom: {
    color: Color.gray700,
  },
  contactDetails: {
    marginTop: 20,
    height: 168,
    alignSelf: "stretch",
  },
  socialMediaCard: {
    padding: Padding.p_sm,
    backgroundColor: Color.primary50,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    alignItems: "center",
  },
  socialMediaLogo1: {
    overflow: "hidden",
  },
  socialMedia: {
    width: 304,
    marginTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  contactUs2: {
    height: 300,
    width: 312,
  },
  becomeAHost: {
    marginTop: 16,
  },
  featuresSubCategories: {
    height: 184,
  },
  features: {
    width: 173,
    height: 248,
  },
  termsAndPoliciesSubcategori: {
    height: 104,
  },
  termsAndPolicies: {
    height: 168,
    width: 203,
  },
  footer: {
    justifyContent: "space-between",
    flexDirection: "row",
    flex: 1,
  },
  footerSection: {
    padding: Padding.p_31xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  landingPage: {
    height: 5096,
    alignItems: "center",
    width: "100%",
    flex: 1,
    backgroundColor: Color.grayWhite,
  },
});

export default LandingPage;
