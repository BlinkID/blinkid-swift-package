// swift-tools-version:5.5
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
            url: "https://github.com/BlinkID/blinkid-ios/releases/download/v5.19.0/Microblink.xcframework.zip",
            checksum: "cde704dfab96f01ea978d2fa287cce01a5cbd7c9ce038c31d712911eea310c21")
    ]
)

