// swift-tools-version:5.3
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
            url: "https://github.com/BlinkID/blinkid-ios/releases/download/v5.9.0/Microblink.xcframework.zip",
            checksum: "3cccb33b082191ebfc4dd759d057c0d8afcabdac400036a20c0c89c7e695a15a")
    ]
)

