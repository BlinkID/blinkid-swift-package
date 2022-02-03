// swift-tools-version:5.4
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "BlinkID",
    products: [
        // Products define the executables and libraries a package produces, and make them visible to other packages.
        .library(
            name: "BlinkID",
            targets: ["Microblink"]),
    ],
    dependencies: [],
    targets: [
        .binaryTarget(
            name: "Microblink",
            url: "https://github.com/BlinkID/blinkid-ios/releases/download/v5.15.1/Microblink.xcframework.zip",
            checksum: "56f099a552a8ea27ba1a800ff44a19056be27ad4ba001529a2c1a1043413b2b1")
    ]
)

