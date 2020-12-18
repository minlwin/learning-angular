package com.jdc.pdfmake;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.LinkOption;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

public class PdfMake {
	
	private List<Path> paths;
	
	public PdfMake(String [] args) {
		try {
			paths = new ArrayList<>();
			for(String str : args) {
				read(Paths.get(str));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private void read(Path path) throws IOException {
		if(Files.isDirectory(path, LinkOption.NOFOLLOW_LINKS)) {
			
			DirectoryStream<Path> stream = Files.newDirectoryStream(path);
			for(Path p : stream) {
				read(p);
			}
		} else {
			if(path.toString().endsWith("ttf")) {
				paths.add(path);
			}
		}
	}
	
	private void generate() throws IOException {
		List<String> lines = new ArrayList<>();
		// head line
		lines.add("this.pdfMake = this.pdfMake || {}; this.pdfMake.vfs = {");
		
		// loop files
		for (int i = 0; i < paths.size(); i++) {
			
			StringBuilder sb = new StringBuilder();
			
			String encodedValue = getEncodedValue(paths.get(i));
			sb.append(String.format("\"%s\":\"%s\"", paths.get(i).getFileName().toString(), encodedValue));
			
			if(i < paths.size() - 1) {
				sb.append(",");
			}
			
			lines.add(sb.toString());
			
		}
		
		// end files
		lines.add("};");
		
		if(!lines.isEmpty()) {
			Files.write(Paths.get("vfs_font.js"), lines, StandardOpenOption.TRUNCATE_EXISTING, StandardOpenOption.CREATE);
		}
	}

	private String getEncodedValue(Path path) throws IOException {
		byte [] binary = Files.readAllBytes(path);
		byte [] encoded = Base64.getEncoder().encode(binary);
		return new String(encoded);
	}

	public static void main(String[] args) {
		try {
			new PdfMake(args.length > 0 ? args: new String[] {"./"}).generate();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
